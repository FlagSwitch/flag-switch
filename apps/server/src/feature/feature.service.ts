import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Feature, Prisma } from "prisma-client";

@Injectable()
export class FeatureService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    featureWhereUniqueInput: Prisma.FeatureWhereUniqueInput
  ): Promise<Feature | null> {
    return this.prisma.feature.findUnique({
      where: featureWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FeatureWhereUniqueInput;
    where?: Prisma.FeatureWhereInput;
    orderBy?: Prisma.FeatureOrderByWithRelationAndSearchRelevanceInput;
  }): Promise<Feature[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.feature.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.FeatureCreateInput): Promise<Feature> {
    return this.prisma.feature.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.FeatureWhereUniqueInput;
    data: Prisma.FeatureUpdateInput;
  }): Promise<Feature> {
    const { where, data } = params;
    return this.prisma.feature.update({
      data,
      where,
    });
  }

  async softDelete(where: Prisma.FeatureWhereUniqueInput): Promise<Feature> {
    return this.prisma.feature.delete({
      where,
    });
  }
}
