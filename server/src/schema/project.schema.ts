import { Type } from '@sinclair/typebox';

export const ProjectSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  description: Type.String(),
})

export const CreateProjectSchema = Type.Intersect([
  ProjectSchema,
  Type.Object({
    clientId: Type.String()
  })
]);