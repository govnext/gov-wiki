import {
  InferAttributes,
  InferCreationAttributes,
  SaveOptions,
} from "sequelize";
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Table,
  AllowNull,
  Length,
} from "sequelize-typescript";
import type { NavigationNode } from "@shared/types";
import Team from "./Team";
import User from "./User";
import TemplateDocumentMapping from "./TemplateDocumentMapping";
import IdModel from "./base/IdModel";
import Fix from "./decorators/Fix";

export interface OnboardingStructure {
  collections: {
    name: string;
    description: string;
    folders: NavigationNode[];
  }[];
}

@Table({ tableName: "onboarding_templates", modelName: "onboarding_template" })
@Fix
class OnboardingTemplate extends IdModel<
  InferAttributes<OnboardingTemplate>,
  Partial<InferCreationAttributes<OnboardingTemplate>>
> {
  @Length({
    max: 255,
    msg: "name must be 255 characters or less",
  })
  @Column
  name: string;

  @AllowNull
  @Column(DataType.TEXT)
  description: string | null;

  @Default("custom")
  @Column
  orgType: string;

  @Default([])
  @Column(DataType.JSONB)
  structure: OnboardingStructure;

  @Default(true)
  @Column
  isActive: boolean;

  // associations

  @BelongsTo(() => Team, "teamId")
  team: Team | null;

  @AllowNull
  @ForeignKey(() => Team)
  @Column(DataType.UUID)
  teamId: string | null;

  @BelongsTo(() => User, "createdById")
  createdBy: User;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  createdById: string;

  @HasMany(() => TemplateDocumentMapping, "onboardingTemplateId")
  documentMappings: TemplateDocumentMapping[];
}

export default OnboardingTemplate; 