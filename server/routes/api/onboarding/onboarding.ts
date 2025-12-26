import Router from "koa-router";
import { Op } from "sequelize";
import { sequelize } from "@server/database/sequelize";
import auth from "@server/middlewares/authentication";
import validate from "@server/middlewares/validate";
import { transaction } from "@server/middlewares/transaction";
import { APIContext } from "@server/types";
import {
  Collection,
  Document,
  OnboardingTemplate,
  TeamOnboardingSetting,
  TemplateDocumentMapping,
  Event,
} from "@server/models";
import { authorize } from "@server/policies";
import { CollectionPermission, NavigationNode } from "@shared/types";
import { DocumentHelper } from "@server/models/helpers/DocumentHelper";
import { presentOnboardingTemplate, presentTeamOnboardingSetting } from "@server/presenters";
import * as T from "./schema";

const router = new Router();

// List available onboarding templates
router.post(
  "onboarding.listTemplates",
  auth(),
  validate(T.OnboardingListTemplatesSchema),
  async (ctx: APIContext<T.OnboardingListTemplatesReq>) => {
    const { user } = ctx.state.auth;
    const { orgType, isActive } = ctx.input.body;

    const where: any = {
      [Op.or]: [
        { teamId: user.teamId },
        { teamId: null }, // Global templates
      ],
    };

    if (orgType) {
      where.orgType = orgType;
    }

    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    const templates = await OnboardingTemplate.findAll({
      where,
      include: [
        {
          association: "documentMappings",
          required: false,
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return {
      data: templates.map(presentOnboardingTemplate),
    };
  }
);

// Create a new onboarding template
router.post(
  "onboarding.createTemplate",
  auth(),
  validate(T.OnboardingCreateTemplateSchema),
  transaction(),
  async (ctx: APIContext<T.OnboardingCreateTemplateReq>) => {
    const { user } = ctx.state.auth;
    const { transaction } = ctx.state;
    const { name, description, orgType, structure } = ctx.input.body;

    authorize(user, "createTemplate", user.team);

    const template = await OnboardingTemplate.create(
      {
        name,
        description,
        orgType,
        structure,
        teamId: user.teamId,
        createdById: user.id,
      },
      { transaction }
    );

    await Event.createFromContext(ctx, {
      name: "onboarding_templates.create",
      modelId: template.id,
      data: {
        name: template.name,
        orgType: template.orgType,
      },
    });

    return {
      data: presentOnboardingTemplate(template),
    };
  }
);

// Update an existing template
router.post(
  "onboarding.updateTemplate",
  auth(),
  validate(T.OnboardingUpdateTemplateSchema),
  transaction(),
  async (ctx: APIContext<T.OnboardingUpdateTemplateReq>) => {
    const { user } = ctx.state.auth;
    const { transaction } = ctx.state;
    const { id, name, description, structure, isActive } = ctx.input.body;

    const template = await OnboardingTemplate.findByPk(id, { transaction });
    
    if (!template) {
      ctx.throw(404, "Template not found");
      return;
    }

    authorize(user, "update", template);

    if (name !== undefined) template.name = name;
    if (description !== undefined) template.description = description;
    if (structure !== undefined) template.structure = structure;
    if (isActive !== undefined) template.isActive = isActive;

    await template.save({ transaction });

    await Event.createFromContext(ctx, {
      name: "onboarding_templates.update",
      modelId: template.id,
      data: {
        name: template.name,
      },
    });

    return {
      data: presentOnboardingTemplate(template),
    };
  }
);

// Delete a template
router.post(
  "onboarding.deleteTemplate",
  auth(),
  validate(T.OnboardingDeleteTemplateSchema),
  transaction(),
  async (ctx: APIContext<T.OnboardingDeleteTemplateReq>) => {
    const { user } = ctx.state.auth;
    const { transaction } = ctx.state;
    const { id } = ctx.input.body;

    const template = await OnboardingTemplate.findByPk(id, { transaction });
    
    if (!template) {
      ctx.throw(404, "Template not found");
      return;
    }

    authorize(user, "delete", template);

    await template.destroy({ transaction });

    await Event.createFromContext(ctx, {
      name: "onboarding_templates.delete",
      modelId: id,
      data: {
        name: template.name,
      },
    });

    return {
      success: true,
    };
  }
);

// Setup collections and documents from a template
router.post(
  "onboarding.setupFromTemplate",
  auth(),
  validate(T.OnboardingSetupFromTemplateSchema),
  transaction(),
  async (ctx: APIContext<T.OnboardingSetupFromTemplateReq>) => {
    const { user } = ctx.state.auth;
    const { transaction } = ctx.state;
    const { templateId, collectionSelections } = ctx.input.body;

    const template = await OnboardingTemplate.findByPk(templateId, {
      include: ["documentMappings"],
      transaction,
    });

    if (!template) {
      ctx.throw(404, "Template not found");
      return;
    }

    authorize(user, "createCollection", user.team);

    const createdCollections: Collection[] = [];
    const createdDocuments: Document[] = [];

    // Create collections and their document structure
    for (const collectionDef of template.structure.collections) {
      const selection = collectionSelections.find(
        (sel) => sel.name === collectionDef.name
      );

      if (!selection?.selected) continue;

      // Create the collection
      const collection = await Collection.create(
        {
          name: collectionDef.name,
          description: collectionDef.description,
          teamId: user.teamId,
          createdById: user.id,
          permission: CollectionPermission.ReadWrite,
        },
        { transaction }
      );

      createdCollections.push(collection);

      // Create document structure
      const processFolder = async (
        folder: NavigationNode,
        parentId: string | null = null,
        path: string = ""
      ) => {
        const folderPath = path ? `${path}/${folder.title}` : folder.title;
        const folderSelection = selection.folders.find(
          (f) => f.path === folderPath
        );

        if (!folderSelection?.selected) return;

        // Check if there's a document template for this folder
        const mapping = template.documentMappings.find(
          (m) => m.folderPath === folderPath
        );

        let content = "";
        let templateDocument: Document | null = null;

        if (mapping?.documentTemplateId) {
          templateDocument = await Document.findByPk(mapping.documentTemplateId, {
            transaction,
          });
          if (templateDocument) {
            content = templateDocument.text;
          }
        }

        // Create the document for this folder
        const document = await Document.create(
          {
            title: folder.title,
            text: content || `# ${folder.title}`,
            content: templateDocument?.content || null,
            teamId: user.teamId,
            collectionId: collection.id,
            parentDocumentId: parentId,
            createdById: user.id,
            lastModifiedById: user.id,
            publishedAt: new Date(),
            template: false,
            templateId: templateDocument?.id,
          },
          { transaction }
        );

        createdDocuments.push(document);

        // Process children recursively
        if (folder.children && folder.children.length > 0) {
          for (const child of folder.children) {
            await processFolder(child, document.id, folderPath);
          }
        }
      };

      // Process all top-level folders
      for (const folder of collectionDef.folders) {
        await processFolder(folder);
      }
    }

    await Event.createFromContext(ctx, {
      name: "onboarding.setup",
      data: {
        templateId,
        collectionsCreated: createdCollections.length,
        documentsCreated: createdDocuments.length,
      },
    });

    return {
      data: {
        collections: createdCollections.map((c) => ({
          id: c.id,
          name: c.name,
          url: c.url,
        })),
        documentsCreated: createdDocuments.length,
      },
    };
  }
);

// Update team onboarding settings
router.post(
  "onboarding.updateSettings",
  auth(),
  validate(T.OnboardingUpdateSettingsSchema),
  transaction(),
  async (ctx: APIContext<T.OnboardingUpdateSettingsReq>) => {
    const { user } = ctx.state.auth;
    const { transaction } = ctx.state;
    const { defaultTemplateId, useTemplatesOnCreate, autoCreateStructure } = ctx.input.body;

    authorize(user, "update", user.team);

    let settings = await TeamOnboardingSetting.findOne({
      where: { teamId: user.teamId },
      transaction,
    });

    if (!settings) {
      settings = await TeamOnboardingSetting.create(
        {
          teamId: user.teamId,
          defaultTemplateId,
          useTemplatesOnCreate: useTemplatesOnCreate ?? false,
          autoCreateStructure: autoCreateStructure ?? false,
        },
        { transaction }
      );
    } else {
      if (defaultTemplateId !== undefined) settings.defaultTemplateId = defaultTemplateId;
      if (useTemplatesOnCreate !== undefined) settings.useTemplatesOnCreate = useTemplatesOnCreate;
      if (autoCreateStructure !== undefined) settings.autoCreateStructure = autoCreateStructure;
      
      await settings.save({ transaction });
    }

    await Event.createFromContext(ctx, {
      name: "onboarding_settings.update",
      data: {
        useTemplatesOnCreate: settings.useTemplatesOnCreate,
        autoCreateStructure: settings.autoCreateStructure,
      },
    });

    return {
      data: presentTeamOnboardingSetting(settings),
    };
  }
);

// Map document template to folder
router.post(
  "onboarding.mapDocumentTemplate",
  auth(),
  validate(T.OnboardingMapDocumentTemplateSchema),
  transaction(),
  async (ctx: APIContext<T.OnboardingMapDocumentTemplateReq>) => {
    const { user } = ctx.state.auth;
    const { transaction } = ctx.state;
    const { onboardingTemplateId, folderPath, documentTemplateId, useAsDefault } = ctx.input.body;

    const template = await OnboardingTemplate.findByPk(onboardingTemplateId, { transaction });
    
    if (!template) {
      ctx.throw(404, "Template not found");
      return;
    }

    authorize(user, "update", template);

    // Check if mapping already exists
    let mapping = await TemplateDocumentMapping.findOne({
      where: {
        onboardingTemplateId,
        folderPath,
      },
      transaction,
    });

    if (mapping) {
      mapping.documentTemplateId = documentTemplateId;
      if (useAsDefault !== undefined) mapping.useAsDefault = useAsDefault;
      await mapping.save({ transaction });
    } else {
      mapping = await TemplateDocumentMapping.create(
        {
          onboardingTemplateId,
          folderPath,
          documentTemplateId,
          useAsDefault: useAsDefault ?? false,
        },
        { transaction }
      );
    }

    return {
      data: {
        id: mapping.id,
        folderPath: mapping.folderPath,
        documentTemplateId: mapping.documentTemplateId,
        useAsDefault: mapping.useAsDefault,
      },
    };
  }
);

export default router; 