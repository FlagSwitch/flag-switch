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
import { CreateProjectDto } from "./dto/create-project.dto";
import {
  UpdateProjectDto,
  UpdateProjectDtoParams,
} from "./dto/update-project.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Project")
@Controller({
  path: "project",
})
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

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
    return this.projectService.create({
      ...createProjectDto,
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
