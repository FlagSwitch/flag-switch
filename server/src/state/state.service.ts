import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { State, Prisma } from '@prisma/client';

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  async state(
    stateWhereUniqueInput: Prisma.StateWhereUniqueInput,
  ): Promise<State | null> {
    return this.prisma.state.findUnique({
      where: stateWhereUniqueInput,
    });
  }

  async states(params: {
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

  async createState(data: Prisma.StateCreateInput): Promise<State> {
    return this.prisma.state.create({
      data,
    });
  }

  async updateState(params: {
    where: Prisma.StateWhereUniqueInput;
    data: Prisma.StateUpdateInput;
  }): Promise<State> {
    const { where, data } = params;
    return this.prisma.state.update({
      data,
      where,
    });
  }

  async deleteState(where: Prisma.ProjectWhereUniqueInput): Promise<State> {
    return this.prisma.state.delete({
      where,
    });
  }
}
