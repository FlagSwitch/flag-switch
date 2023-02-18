import { Type } from '@sinclair/typebox'

export const EnvironmentSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
});

export const CreateEnvironmentSchema = Type.Intersect([
  EnvironmentSchema,
  Type.Object({
    clientId: Type.String()
  })
]);