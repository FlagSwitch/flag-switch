import { PrismaService } from '../prisma.service';
import { EnvFeature, Prisma } from 'prisma-client';
export declare class EnvFeatureService {
    private prisma;
    constructor(prisma: PrismaService);
    envFeature(envFeatureWhereUniqueInput: Prisma.EnvFeatureWhereUniqueInput): Promise<EnvFeature | null>;
    envFeatures(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EnvFeatureWhereUniqueInput;
        where?: Prisma.EnvFeatureWhereInput;
        orderBy?: Prisma.EnvFeatureOrderByWithRelationAndSearchRelevanceInput;
    }): Promise<EnvFeature[]>;
    createEnvFeature(data: Prisma.EnvFeatureCreateInput): Promise<EnvFeature>;
    updateEnvFeature(params: {
        where: Prisma.EnvFeatureWhereUniqueInput;
        data: Prisma.EnvFeatureUpdateInput;
    }): Promise<EnvFeature>;
    deleteEnvFeature(where: Prisma.EnvFeatureWhereUniqueInput): Promise<EnvFeature>;
}
