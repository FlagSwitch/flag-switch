import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Environment, Prisma } from 'prisma-client';

@Injectable()
export class EnvironmentService {
  constructor(private prisma: PrismaService) {}

  async environment(
    environmentWhereUniqueInput: Prisma.EnvironmentWhereUniqueInput,
  ): Promise<Environment | null> {
    return this.prisma.environment.findUnique({
      where: environmentWhereUniqueInput,
    });
  }

  async environments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EnvironmentWhereUniqueInput;
    where?: Prisma.EnvironmentWhereInput;
    orderBy?: Prisma.EnvironmentOrderByWithRelationAndSearchRelevanceInput;
  }): Promise<Environment[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createEnvironment(
    data: Prisma.EnvironmentCreateInput,
  ): Promise<Environment> {
    return this.prisma.environment.create({
      data,
    });
  }

  async updateEnvironment(params: {
    where: Prisma.EnvironmentWhereUniqueInput;
    data: Prisma.EnvironmentUpdateInput;
  }): Promise<Environment> {
    const { where, data } = params;
    return this.prisma.environment.update({
      data,
      where,
    });
  }

  async deleteEnvironment(
    where: Prisma.EnvironmentWhereUniqueInput,
  ): Promise<Environment> {
    return this.prisma.user.delete({
      where,
    });
  }
}
