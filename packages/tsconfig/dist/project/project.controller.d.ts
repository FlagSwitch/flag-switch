import { ProjectService } from './project.service';
import { Project as ProjectModel } from '@prisma/client';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto, UpdateProjectDtoParams } from './dto/update-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    getProjects(): Promise<ProjectModel[]>;
    createProject(createProjectDto: CreateProjectDto): Promise<ProjectModel>;
    updateProject({ id }: UpdateProjectDtoParams, updateProjectDto: UpdateProjectDto): Promise<ProjectModel>;
}
