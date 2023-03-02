import { PrismaService } from '../prisma.service';
import { State, Prisma } from 'prisma-client';
export declare class StateService {
    private prisma;
    constructor(prisma: PrismaService);
    state(stateWhereUniqueInput: Prisma.StateWhereUniqueInput): Promise<State | null>;
    states(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.StateWhereUniqueInput;
        where?: Prisma.StateWhereInput;
        orderBy?: Prisma.StateOrderByWithRelationAndSearchRelevanceInput;
    }): Promise<State[]>;
    createState(data: Prisma.StateCreateInput): Promise<State>;
    updateState(params: {
        where: Prisma.StateWhereUniqueInput;
        data: Prisma.StateUpdateInput;
    }): Promise<State>;
    deleteState(where: Prisma.ProjectWhereUniqueInput): Promise<State>;
}
