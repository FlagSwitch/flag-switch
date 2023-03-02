import { PrismaService } from '../prisma.service';
import { Feature, Prisma } from 'prisma-client';
export declare class FeatureService {
    private prisma;
    constructor(prisma: PrismaService);
    feature(featureWhereUniqueInput: Prisma.FeatureWhereUniqueInput): Promise<Feature | null>;
    features(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.FeatureWhereUniqueInput;
        where?: Prisma.FeatureWhereInput;
        orderBy?: Prisma.FeatureOrderByWithRelationAndSearchRelevanceInput;
    }): Promise<Feature[]>;
    createFeature(data: Prisma.FeatureCreateInput): Promise<Feature>;
    updateFeature(params: {
        where: Prisma.FeatureWhereUniqueInput;
        data: Prisma.FeatureUpdateInput;
    }): Promise<Feature>;
    deleteFeature(where: Prisma.FeatureWhereUniqueInput): Promise<Feature>;
}
