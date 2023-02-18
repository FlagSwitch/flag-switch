import { Static } from '@sinclair/typebox';
import { FeatureToggleSchema, CreateFeatureToggleSchema} from '../schema/featureToggle.schema';


export type TFeatureToggle = Static<typeof FeatureToggleSchema>;

export type TCreateFeatureToggle = Static<typeof CreateFeatureToggleSchema>;