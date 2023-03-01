import { Controller, Param, Post, Body, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project as ProjectModel } from '@prisma/client';
import { CreateProjectDto } from './dto/create-project.dto';
import {
  UpdateProjectDto,
  UpdateProjectDtoParams,
} from './dto/update-project.dto';
@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('project')
  async createProject(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<ProjectModel> {
    const { name, description, accountId } = createProjectDto;
    return this.projectService.createProject({
      name,
      description,
      account: {
        connect: {
          id: accountId,
        },
      },
    });
  }

  @Put('project/:id')
  async updateProject(
    @Param('id') { id }: UpdateProjectDtoParams,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectModel> {
    return this.projectService.updateProject({
      where: { id },
      data: updateProjectDto,
    });
  }
}
