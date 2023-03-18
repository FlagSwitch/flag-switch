import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { State, Prisma } from "prisma-client";

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    stateWhereUniqueInput: Prisma.StateWhereUniqueInput
  ): Promise<State | null> {
    return this.prisma.state.findUnique({
      where: stateWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StateWhereUniqueInput;
    where?: Prisma.StateWhereInput;
    orderBy?: Prisma.StateOrderByWithRelationAndSearchRelevanceInput;
  }): Promise<State[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.state.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.StateCreateInput): Promise<State> {
    return this.prisma.state.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.StateWhereUniqueInput;
    data: Prisma.StateUpdateInput;
  }): Promise<State> {
    const { where, data } = params;
    return this.prisma.state.update({
      data,
      where,
    });
  }

  async softDelete(where: Prisma.StateWhereUniqueInput): Promise<State> {
    return this.prisma.state.delete({
      where,
    });
  }
}
