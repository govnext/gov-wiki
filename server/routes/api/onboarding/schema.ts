import { z } from "zod";
import { BaseSchema } from "@server/routes/api/schema";

export const OnboardingListTemplatesSchema = BaseSchema.extend({
  body: z.object({
    orgType: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
});

export const OnboardingCreateTemplateSchema = BaseSchema.extend({
  body: z.object({
    name: z.string().min(1).max(255),
    description: z.string().optional(),
    orgType: z.string().default("custom"),
    structure: z.object({
      collections: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          folders: z.array(z.any()),
        })
      ),
    }),
  }),
});

export const OnboardingUpdateTemplateSchema = BaseSchema.extend({
  body: z.object({
    id: z.string().uuid(),
    name: z.string().min(1).max(255).optional(),
    description: z.string().optional(),
    structure: z
      .object({
        collections: z.array(
          z.object({
            name: z.string(),
            description: z.string(),
            folders: z.array(z.any()),
          })
        ),
      })
      .optional(),
    isActive: z.boolean().optional(),
  }),
});

export const OnboardingDeleteTemplateSchema = BaseSchema.extend({
  body: z.object({
    id: z.string().uuid(),
  }),
});

export const OnboardingSetupFromTemplateSchema = BaseSchema.extend({
  body: z.object({
    templateId: z.string().uuid(),
    collectionSelections: z.array(
      z.object({
        name: z.string(),
        selected: z.boolean(),
        folders: z.array(
          z.object({
            path: z.string(),
            selected: z.boolean(),
          })
        ),
      })
    ),
  }),
});

export const OnboardingUpdateSettingsSchema = BaseSchema.extend({
  body: z.object({
    defaultTemplateId: z.string().uuid().nullable().optional(),
    useTemplatesOnCreate: z.boolean().optional(),
    autoCreateStructure: z.boolean().optional(),
  }),
});

export const OnboardingMapDocumentTemplateSchema = BaseSchema.extend({
  body: z.object({
    onboardingTemplateId: z.string().uuid(),
    folderPath: z.string(),
    documentTemplateId: z.string().uuid().nullable(),
    useAsDefault: z.boolean().optional(),
  }),
});

export type OnboardingListTemplatesReq = z.infer<typeof OnboardingListTemplatesSchema>;
export type OnboardingCreateTemplateReq = z.infer<typeof OnboardingCreateTemplateSchema>;
export type OnboardingUpdateTemplateReq = z.infer<typeof OnboardingUpdateTemplateSchema>;
export type OnboardingDeleteTemplateReq = z.infer<typeof OnboardingDeleteTemplateSchema>;
export type OnboardingSetupFromTemplateReq = z.infer<typeof OnboardingSetupFromTemplateSchema>;
export type OnboardingUpdateSettingsReq = z.infer<typeof OnboardingUpdateSettingsSchema>;
export type OnboardingMapDocumentTemplateReq = z.infer<typeof OnboardingMapDocumentTemplateSchema>; 