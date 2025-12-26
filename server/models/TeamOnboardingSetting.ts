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
  Unique,
} from "sequelize-typescript";
import Team from "./Team";
import OnboardingTemplate from "./OnboardingTemplate";
import IdModel from "./base/IdModel";
import Fix from "./decorators/Fix";

@Table({ tableName: "team_onboarding_settings", modelName: "team_onboarding_setting" })
@Fix
class TeamOnboardingSetting extends IdModel<
  InferAttributes<TeamOnboardingSetting>,
  Partial<InferCreationAttributes<TeamOnboardingSetting>>
> {
  @Default(false)
  @Column
  useTemplatesOnCreate: boolean;

  @Default(false)
  @Column
  autoCreateStructure: boolean;

  // associations

  @BelongsTo(() => Team, "teamId")
  team: Team;

  @Unique
  @ForeignKey(() => Team)
  @Column(DataType.UUID)
  teamId: string;

  @BelongsTo(() => OnboardingTemplate, "defaultTemplateId")
  defaultTemplate: OnboardingTemplate | null;

  @AllowNull
  @ForeignKey(() => OnboardingTemplate)
  @Column(DataType.UUID)
  defaultTemplateId: string | null;
}

export default TeamOnboardingSetting; 