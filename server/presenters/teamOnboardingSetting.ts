import { TeamOnboardingSetting } from "@server/models";

export default function presentTeamOnboardingSetting(settings: TeamOnboardingSetting) {
  return {
    id: settings.id,
    teamId: settings.teamId,
    defaultTemplateId: settings.defaultTemplateId,
    useTemplatesOnCreate: settings.useTemplatesOnCreate,
    autoCreateStructure: settings.autoCreateStructure,
    createdAt: settings.createdAt,
    updatedAt: settings.updatedAt,
  };
} 