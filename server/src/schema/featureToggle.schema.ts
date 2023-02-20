import { Type } from "@sinclair/typebox";
import { FeatureType } from "@prisma/client";

export const FeatureToggleSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  type: Type.Enum(FeatureType),
  createdBy: Type.String(),
});

export const CreateFeatureToggleSchema = Type.Intersect([
  FeatureToggleSchema,

  Type.Object({
    projectId: Type.String(),
  }),
]);
