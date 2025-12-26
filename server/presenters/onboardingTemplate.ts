import { OnboardingTemplate } from "@server/models";

export default function presentOnboardingTemplate(template: OnboardingTemplate) {
  return {
    id: template.id,
    name: template.name,
    description: template.description,
    orgType: template.orgType,
    structure: template.structure,
    isActive: template.isActive,
    teamId: template.teamId,
    createdAt: template.createdAt,
    updatedAt: template.updatedAt,
    documentMappings: template.documentMappings?.map((mapping) => ({
      id: mapping.id,
      folderPath: mapping.folderPath,
      documentTemplateId: mapping.documentTemplateId,
      useAsDefault: mapping.useAsDefault,
    })),
  };
} 