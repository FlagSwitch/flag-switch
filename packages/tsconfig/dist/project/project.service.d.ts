import { PrismaService } from '../prisma.service';
import { Project, Prisma } from 'prisma-client';
export declare class ProjectService {
    private prisma;
    constructor(prisma: PrismaService);
    project(projectWhereUniqueInput: Prisma.ProjectWhereUniqueInput): Promise<Project | null>;
    projects(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProjectWhereUniqueInput;
        where?: Prisma.ProjectWhereInput;
        orderBy?: Prisma.ProjectOrderByWithRelationAndSearchRelevanceInput;
    }): Promise<Project[]>;
    createProject(data: Prisma.ProjectCreateInput): Promise<Project>;
    updateProject(params: {
        where: Prisma.ProjectWhereUniqueInput;
        data: Prisma.ProjectUpdateInput;
    }): Promise<Project>;
    deleteProject(where: Prisma.ProjectWhereUniqueInput): Promise<Project>;
}
