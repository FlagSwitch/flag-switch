import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Application, Prisma } from "prisma-client";

@Injectable()
export class ApplicationService {
  constructor(private prisma: PrismaService) {}

  async account(
    accountWhereUniqueInput: Prisma.ApplicationWhereUniqueInput
  ): Promise<Application | null> {
    return this.prisma.application.findUnique({
      where: accountWhereUniqueInput,
    });
  }

  async applications(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ApplicationWhereUniqueInput;
    where?: Prisma.ApplicationWhereInput;
    orderBy?: Prisma.ApplicationOrderByWithRelationAndSearchRelevanceInput;
  }): Promise<Application[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.application.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createApplication(
    data: Prisma.ApplicationCreateInput
  ): Promise<Application> {
    return this.prisma.application.create({
      data,
    });
  }

  async updateApplication(params: {
    where: Prisma.ApplicationWhereUniqueInput;
    data: Prisma.ApplicationUpdateInput;
  }): Promise<Application> {
    const { where, data } = params;
    return this.prisma.application.update({
      data,
      where,
    });
  }

  async deleteApplication(
    where: Prisma.ApplicationWhereUniqueInput
  ): Promise<Application> {
    return this.prisma.application.delete({
      where,
    });
  }
}
