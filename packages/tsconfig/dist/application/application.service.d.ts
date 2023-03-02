import { PrismaService } from '../prisma.service';
import { Application, Prisma } from 'prisma-client';
export declare class ApplicationService {
    private prisma;
    constructor(prisma: PrismaService);
    account(accountWhereUniqueInput: Prisma.AccountWhereUniqueInput): Promise<Application | null>;
    applications(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ApplicationWhereUniqueInput;
        where?: Prisma.ApplicationWhereInput;
        orderBy?: Prisma.ApplicationOrderByWithRelationAndSearchRelevanceInput;
    }): Promise<Application[]>;
    createApplication(data: Prisma.ApplicationCreateInput): Promise<Application>;
    updateApplication(params: {
        where: Prisma.ApplicationWhereUniqueInput;
        data: Prisma.ApplicationUpdateInput;
    }): Promise<Application>;
    deleteApplication(where: Prisma.ApplicationWhereUniqueInput): Promise<Application>;
}
