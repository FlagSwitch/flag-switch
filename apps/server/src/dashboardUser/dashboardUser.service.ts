import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DashboardUser, Prisma } from "prisma-client";

@Injectable()
export class DashboardUserService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    dashboardUserWhereUniqueInput: Prisma.DashboardUserWhereUniqueInput
  ): Promise<DashboardUser | null> {
    return this.prisma.dashboardUser.findUnique({
      where: dashboardUserWhereUniqueInput,
    });
  }

  async findMany(params: {
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

  async create(data: Prisma.DashboardUserCreateInput): Promise<DashboardUser> {
    return this.prisma.dashboardUser.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.DashboardUserWhereUniqueInput;
    data: Prisma.DashboardUserUpdateInput;
  }): Promise<DashboardUser> {
    const { where, data } = params;
    return this.prisma.dashboardUser.update({
      data,
      where,
    });
  }

  async softDelete(
    where: Prisma.DashboardUserWhereUniqueInput
  ): Promise<DashboardUser> {
    return this.prisma.dashboardUser.delete({
      where,
    });
  }
}
