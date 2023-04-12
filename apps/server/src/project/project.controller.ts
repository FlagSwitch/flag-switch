import {
  Controller,
  Param,
  Post,
  Body,
  Put,
  Get,
  Request,
} from "@nestjs/common";
import { ProjectService } from "./project.service";
import { Project as ProjectModel } from "@prisma/client";

import {
  CreateProjectDto,
  UpdateProjectDto,
  UpdateProjectDtoParams,
} from "dto-types";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { projectRoutes } from "router-constants";
import { EnvironmentService } from "../environment/environment.service";
@ApiTags("Project")
@Controller({
  path: projectRoutes.project,
})
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly envService: EnvironmentService
  ) {}

  @ApiBearerAuth()
  @Get()
  async getProjects(): Promise<ProjectModel[]> {
    return this.projectService.findMany({});
  }
  @ApiBearerAuth()
  @Post()
  async createProject(
    @Request() request,
    @Body() createProjectDto: CreateProjectDto
  ): Promise<ProjectModel> {
    const environments = await this.envService.findMany({});
    return this.projectService.create({
      ...createProjectDto,
      environments: {
        connect: environments.map(({ id }) => ({
          id,
        })),
      },
      dashboardUsers: {
        connect: {
          id: request.user.id,
        },
      },
    });
  }

  @ApiBearerAuth()
  @Put(":id")
  async updateProject(
    @Param("id") { id }: UpdateProjectDtoParams,
    @Body() updateProjectDto: UpdateProjectDto
  ): Promise<ProjectModel> {
    return this.projectService.update({
      where: { id },
      data: updateProjectDto,
    });
  }
}
