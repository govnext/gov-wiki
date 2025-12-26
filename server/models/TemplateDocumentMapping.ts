import {
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Table,
  AllowNull,
  Length,
} from "sequelize-typescript";
import Document from "./Document";
import OnboardingTemplate from "./OnboardingTemplate";
import IdModel from "./base/IdModel";
import Fix from "./decorators/Fix";

@Table({ tableName: "template_document_mappings", modelName: "template_document_mapping" })
@Fix
class TemplateDocumentMapping extends IdModel<
  InferAttributes<TemplateDocumentMapping>,
  Partial<InferCreationAttributes<TemplateDocumentMapping>>
> {
  @Length({
    max: 500,
    msg: "folderPath must be 500 characters or less",
  })
  @Column
  folderPath: string;

  @Default(false)
  @Column
  useAsDefault: boolean;

  // associations

  @BelongsTo(() => OnboardingTemplate, "onboardingTemplateId")
  onboardingTemplate: OnboardingTemplate;

  @ForeignKey(() => OnboardingTemplate)
  @Column(DataType.UUID)
  onboardingTemplateId: string;

  @BelongsTo(() => Document, "documentTemplateId")
  documentTemplate: Document | null;

  @AllowNull
  @ForeignKey(() => Document)
  @Column(DataType.UUID)
  documentTemplateId: string | null;
}

export default TemplateDocumentMapping; 