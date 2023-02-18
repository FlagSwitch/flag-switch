import { Type } from '@sinclair/typebox'

export const UserSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  email: Type.String({ format: 'email'}),
});


export const CreateUserSchema = Type.Intersect([
  UserSchema,
  Type.Object({
    clientId: Type.String()
  })
]);
