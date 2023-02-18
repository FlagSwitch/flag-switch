import { Type } from '@sinclair/typebox';
import { FeatureToggleType } from "@prisma/client";


export const FeatureToggleSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  type: Type.Enum(FeatureToggleType),
  createdBy: Type.String()
});

export const CreateFeatureToggleSchema = Type.Intersect([
  FeatureToggleSchema,
  Type.Object({
    projectId: Type.String()
  })
]);