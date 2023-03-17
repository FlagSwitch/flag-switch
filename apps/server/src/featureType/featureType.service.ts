import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeatureType, Prisma } from "prisma-client";

@Injectable()
export class FeatureTypeService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    featureTypeWhereUniqueInput: Prisma.FeatureTypeWhereUniqueInput
  ): Promise<FeatureType | null> {
    return this.prisma.featureType.findUnique({
      where: featureTypeWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FeatureTypeWhereUniqueInput;
    where?: Prisma.FeatureTypeWhereInput;
    orderBy?: Prisma.FeatureTypeOrderByWithRelationAndSearchRelevanceInput;
  }): Promise<FeatureType[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.featureType.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
