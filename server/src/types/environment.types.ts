import { Static } from '@sinclair/typebox';
import { EnvironmentSchema, CreateEnvironmentSchema} from '../schema/environment.schema';


export type TEnvironment = Static<typeof EnvironmentSchema>;

export type TCreateEnvironment = Static<typeof CreateEnvironmentSchema>;