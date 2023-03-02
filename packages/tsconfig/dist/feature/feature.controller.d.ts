import { FeatureService } from './feature.service';
import { Feature as FeatureModel } from '@prisma/client';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto, UpdateFeatureDtoParams } from './dto/update-feature.dto';
export declare class FeatureController {
    private readonly featureService;
    constructor(featureService: FeatureService);
    createAccount(createFeatureDto: CreateFeatureDto): Promise<FeatureModel>;
    updateFeature({ id }: UpdateFeatureDtoParams, updateFeatureDto: UpdateFeatureDto): Promise<FeatureModel>;
}
