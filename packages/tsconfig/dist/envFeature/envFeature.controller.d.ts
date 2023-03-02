import { EnvFeatureService } from './envFeature.service';
import { EnvFeature as EnvFeatureModel } from '@prisma/client';
import { CreateEnvFeatureDto } from './dto/create-env-feature.dto';
import { UpdateEnvFeatureDto, UpdateEnvFeatureDtoParams } from './dto/update-env-feature.dto';
export declare class EnvFeatureController {
    private readonly envFeatureService;
    constructor(envFeatureService: EnvFeatureService);
    createEnvFeature(createEnvFeatureDto: CreateEnvFeatureDto): Promise<EnvFeatureModel>;
    updateEnvfeature({ id }: UpdateEnvFeatureDtoParams, updateEnvFeatureDto: UpdateEnvFeatureDto): Promise<EnvFeatureModel>;
}
