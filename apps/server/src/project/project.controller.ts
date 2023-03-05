import { Controller, Param, Post, Body, Put, Get } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { Project as ProjectModel } from "@prisma/client";
import { CreateProjectDto } from "./dto/create-project.dto";
import {
  UpdateProjectDto,
  UpdateProjectDtoParams,
} from "./dto/update-project.dto";
@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get("projects")
  async getProjects(): Promise<ProjectModel[]> {
    return this.projectService.projects({});
  }
  @Post("project")
  async createProject(
    @Body() createProjectDto: CreateProjectDto
  ): Promise<ProjectModel> {
    return this.projectService.createProject(createProjectDto);
  }

  @Put("project/:id")
  async updateProject(
    @Param("id") { id }: UpdateProjectDtoParams,
    @Body() updateProjectDto: UpdateProjectDto
  ): Promise<ProjectModel> {
    return this.projectService.updateProject({
      where: { id },
      data: updateProjectDto,
    });
  }
}
