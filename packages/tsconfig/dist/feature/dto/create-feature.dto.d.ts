import { FeatureType } from '@prisma/client';
export declare class CreateFeatureDto {
    readonly name: string;
    readonly projectId: string;
    readonly createdBy: string;
    readonly type: FeatureType;
}
