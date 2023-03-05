import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma, Forgot, ForgotWithDashboardUser } from "prisma-client";
@Injectable()
export class ForgotService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    forgotWhereUniqueInput: Prisma.ForgotWhereUniqueInput
  ): Promise<ForgotWithDashboardUser | null> {
    return this.prisma.forgot.findUnique({
      where: forgotWhereUniqueInput,
      include: {
        dashboardUser: true,
      },
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ForgotWhereUniqueInput;
    where?: Prisma.ForgotWhereInput;
    orderBy?: Prisma.ForgotOrderByWithRelationAndSearchRelevanceInput;
  }): Promise<ForgotWithDashboardUser[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.forgot.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        dashboardUser: true,
      },
    });
  }

  async create(data: Prisma.ForgotCreateInput): Promise<Forgot> {
    return this.prisma.forgot.create({
      data,
    });
  }

  async softDelete(where: Prisma.ForgotWhereUniqueInput): Promise<void> {
    await this.prisma.forgot.delete({
      where,
    });
  }
}
