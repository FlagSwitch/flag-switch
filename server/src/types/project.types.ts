import { Static } from '@sinclair/typebox';
import { ProjectSchema, CreateProjectSchema} from '../schema/project.schema';

export type TCreateProject = Static<typeof CreateProjectSchema>;

export type TProject = Static<typeof ProjectSchema>;