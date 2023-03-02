import { PrismaService } from '../prisma.service';
import { Environment, Prisma } from 'prisma-client';
export declare class EnvironmentService {
    private prisma;
    constructor(prisma: PrismaService);
    environment(environmentWhereUniqueInput: Prisma.EnvironmentWhereUniqueInput): Promise<Environment | null>;
    environments(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EnvironmentWhereUniqueInput;
        where?: Prisma.EnvironmentWhereInput;
        orderBy?: Prisma.EnvironmentOrderByWithRelationAndSearchRelevanceInput;
    }): Promise<Environment[]>;
    createEnvironment(data: Prisma.EnvironmentCreateInput): Promise<Environment>;
    updateEnvironment(params: {
        where: Prisma.EnvironmentWhereUniqueInput;
        data: Prisma.EnvironmentUpdateInput;
    }): Promise<Environment>;
    deleteEnvironment(where: Prisma.EnvironmentWhereUniqueInput): Promise<Environment>;
}
