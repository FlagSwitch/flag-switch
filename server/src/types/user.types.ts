import { Static } from '@sinclair/typebox';
import { UserSchema, CreateUserSchema } from '../schema/user.schema';

export type TCreateUser = Static<typeof CreateUserSchema>;

export type TUser = Static<typeof UserSchema>