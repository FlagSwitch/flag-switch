import { PrismaService } from '../prisma.service';
import { DashboardUser, Prisma } from 'prisma-client';
export declare class DashboardUserService {
    private prisma;
    constructor(prisma: PrismaService);
    dashboardUser(dashboardUserWhereUniqueInput: Prisma.DashboardUserWhereUniqueInput): Promise<DashboardUser | null>;
    dashboardUsers(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DashboardUserWhereUniqueInput;
        where?: Prisma.DashboardUserWhereInput;
        orderBy?: Prisma.DashboardUserOrderByWithRelationAndSearchRelevanceInput;
    }): Promise<DashboardUser[]>;
    createDashboardUser(data: Prisma.DashboardUserCreateInput): Promise<DashboardUser>;
    updateDashboardUser(params: {
        where: Prisma.DashboardUserWhereUniqueInput;
        data: Prisma.DashboardUserUpdateInput;
    }): Promise<DashboardUser>;
    deleteDashboardUser(where: Prisma.DashboardUserWhereUniqueInput): Promise<DashboardUser>;
}
