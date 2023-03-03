import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { EnvFeature, Prisma } from "prisma-client";

@Injectable()
export class EnvFeatureService {
  constructor(private prisma: PrismaService) {}

  async envFeature(
    envFeatureWhereUniqueInput: Prisma.EnvFeatureWhereUniqueInput
  ): Promise<EnvFeature | null> {
    return this.prisma.envFeature.findUnique({
      where: envFeatureWhereUniqueInput,
    });
  }

  async envFeatures(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EnvFeatureWhereUniqueInput;
    where?: Prisma.EnvFeatureWhereInput;
    orderBy?: Prisma.EnvFeatureOrderByWithRelationAndSearchRelevanceInput;
  }): Promise<EnvFeature[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.envFeature.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createEnvFeature(
    data: Prisma.EnvFeatureCreateInput
  ): Promise<EnvFeature> {
    return this.prisma.envFeature.create({
      data,
    });
  }

  async updateEnvFeature(params: {
    where: Prisma.EnvFeatureWhereUniqueInput;
    data: Prisma.EnvFeatureUpdateInput;
  }): Promise<EnvFeature> {
    const { where, data } = params;
    return this.prisma.envFeature.update({
      data,
      where,
    });
  }

  async deleteEnvFeature(
    where: Prisma.EnvFeatureWhereUniqueInput
  ): Promise<EnvFeature> {
    return this.prisma.envFeature.delete({
      where,
    });
  }
}
