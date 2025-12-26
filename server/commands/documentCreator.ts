import { Optional } from "utility-types";
import { ProsemirrorHelper as SharedProsemirrorHelper } from "@shared/utils/ProsemirrorHelper";
import { TextHelper } from "@shared/utils/TextHelper";
import { Document, Event, User, TeamOnboardingSetting, TemplateDocumentMapping } from "@server/models";
import { DocumentHelper } from "@server/models/helpers/DocumentHelper";
import { ProsemirrorHelper } from "@server/models/helpers/ProsemirrorHelper";
import { APIContext } from "@server/types";

type Props = Optional<
  Pick<
    Document,
    | "id"
    | "urlId"
    | "title"
    | "text"
    | "content"
    | "icon"
    | "color"
    | "collectionId"
    | "parentDocumentId"
    | "importId"
    | "apiImportId"
    | "template"
    | "fullWidth"
    | "sourceMetadata"
    | "editorVersion"
    | "publishedAt"
    | "createdAt"
    | "updatedAt"
  >
> & {
  state?: Buffer;
  publish?: boolean;
  templateDocument?: Document | null;
  user: User;
  ctx: APIContext;
};

export default async function documentCreator({
  title,
  text,
  icon,
  color,
  state,
  id,
  urlId,
  publish,
  collectionId,
  parentDocumentId,
  content,
  template,
  templateDocument,
  fullWidth,
  importId,
  apiImportId,
  createdAt,
  // allows override for import
  updatedAt,
  user,
  editorVersion,
  publishedAt,
  sourceMetadata,
  ctx,
}: Props): Promise<Document> {
  const { transaction, ip } = ctx.context;
  let templateId = templateDocument ? templateDocument.id : undefined;

  if (state && templateDocument) {
    throw new Error(
      "State cannot be set when creating a document from a template"
    );
  }

  // Check if team has onboarding settings and should use templates on create
  if (!templateDocument && collectionId && parentDocumentId && title) {
    const teamSettings = await TeamOnboardingSetting.findOne({
      where: { teamId: user.teamId },
      transaction,
    });

    if (teamSettings?.useTemplatesOnCreate && teamSettings.defaultTemplateId) {
      // Try to find a document template mapping for this folder path
      const parentDoc = await Document.findByPk(parentDocumentId, {
        attributes: ['title'],
        transaction,
      });

      if (parentDoc) {
        const mapping = await TemplateDocumentMapping.findOne({
          where: {
            onboardingTemplateId: teamSettings.defaultTemplateId,
            folderPath: parentDoc.title,
            useAsDefault: true,
          },
          transaction,
        });

        if (mapping?.documentTemplateId) {
          templateDocument = await Document.findByPk(mapping.documentTemplateId, {
            transaction,
          });
          templateId = templateDocument?.id;
        }
      }
    }
  }

  if (urlId) {
    const existing = await Document.unscoped().findOne({
      attributes: ["id"],
      transaction,
      where: {
        urlId,
      },
    });
    if (existing) {
      urlId = undefined;
    }
  }

  const titleWithReplacements =
    title ??
    (templateDocument
      ? template
        ? templateDocument.title
        : TextHelper.replaceTemplateVariables(templateDocument.title, user)
      : "");

  const contentWithReplacements = text
    ? ProsemirrorHelper.toProsemirror(text).toJSON()
    : templateDocument
    ? template
      ? templateDocument.content
      : SharedProsemirrorHelper.replaceTemplateVariables(
          await DocumentHelper.toJSON(templateDocument),
          user
        )
    : content;

  const document = Document.build({
    id,
    urlId,
    parentDocumentId,
    editorVersion,
    collectionId,
    teamId: user.teamId,
    createdAt,
    updatedAt: updatedAt ?? createdAt,
    lastModifiedById: user.id,
    createdById: user.id,
    template,
    templateId,
    publishedAt,
    importId,
    apiImportId,
    sourceMetadata,
    fullWidth: fullWidth ?? templateDocument?.fullWidth,
    icon: icon ?? templateDocument?.icon,
    color: color ?? templateDocument?.color,
    title: titleWithReplacements,
    content: contentWithReplacements,
    state,
  });

  document.text = DocumentHelper.toMarkdown(document, {
    includeTitle: false,
  });

  await document.save({
    silent: !!createdAt,
    transaction,
  });

  await Event.create(
    {
      name: "documents.create",
      documentId: document.id,
      collectionId: document.collectionId,
      teamId: document.teamId,
      actorId: user.id,
      data: {
        source: importId || apiImportId ? "import" : undefined,
        title: document.title,
        templateId,
      },
      ip,
    },
    {
      transaction,
    }
  );

  if (publish) {
    if (!collectionId && !template) {
      throw new Error("Collection ID is required to publish");
    }

    await document.publish(user, collectionId, { silent: true, transaction });
    if (document.title) {
      await Event.create(
        {
          name: "documents.publish",
          documentId: document.id,
          collectionId: document.collectionId,
          teamId: document.teamId,
          actorId: user.id,
          data: {
            source: importId ? "import" : undefined,
            title: document.title,
          },
          ip,
        },
        {
          transaction,
        }
      );
    }
  }

  // reload to get all of the data needed to present (user, collection etc)
  // we need to specify publishedAt to bypass default scope that only returns
  // published documents
  return Document.findByPk(document.id, {
    userId: user.id,
    rejectOnEmpty: true,
    transaction,
  });
}
