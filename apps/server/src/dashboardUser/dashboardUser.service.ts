import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DashboardUser, Prisma } from 'prisma-client';

@Injectable()
export class DashboardUserService {
  constructor(private prisma: PrismaService) {}

  async dashboardUser(
    dashboardUserWhereUniqueInput: Prisma.DashboardUserWhereUniqueInput,
  ): Promise<DashboardUser | null> {
    return this.prisma.dashboardUser.findUnique({
      where: dashboardUserWhereUniqueInput,
    });
  }

  async dashboardUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DashboardUserWhereUniqueInput;
    where?: Prisma.DashboardUserWhereInput;
    orderBy?: Prisma.DashboardUserOrderByWithRelationAndSearchRelevanceInput;
  }): Promise<DashboardUser[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dashboardUser.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDashboardUser(
    data: Prisma.DashboardUserCreateInput,
  ): Promise<DashboardUser> {
    return this.prisma.dashboardUser.create({
      data,
    });
  }

  async updateDashboardUser(params: {
    where: Prisma.DashboardUserWhereUniqueInput;
    data: Prisma.DashboardUserUpdateInput;
  }): Promise<DashboardUser> {
    const { where, data } = params;
    return this.prisma.dashboardUser.update({
      data,
      where,
    });
  }

  async deleteDashboardUser(
    where: Prisma.DashboardUserWhereUniqueInput,
  ): Promise<DashboardUser> {
    return this.prisma.dashboardUser.delete({
      where,
    });
  }
}
