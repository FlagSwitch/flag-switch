import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { EnvironmentService } from "./environment.service";
import { Environment as EnvironmentModel } from "@prisma/client";
import { CreateEnvironmentDto } from "./dto/create-environment.dto";
import {
  UpdateEnvironmentDtoParams,
  UpdateEnvironmentDto,
} from "./dto/update-environment.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Environment")
@Controller({
  path: 'environment'
})
export class EnvironmentController {
  constructor(private readonly environmentService: EnvironmentService) {}

  @ApiBearerAuth()
  @Post()
  async createEnvironment(
    @Body() createEnvironmentDto: CreateEnvironmentDto
  ): Promise<EnvironmentModel> {
    const { name, environmentId } = createEnvironmentDto;
    return this.environmentService.create({
      id: environmentId,
      name,
    });
  }

  @Put(":id")
  async updateEnvironment(
    @Param("id") { id }: UpdateEnvironmentDtoParams,
    @Body() updateEnvironmentDto: UpdateEnvironmentDto
  ): Promise<EnvironmentModel> {
    return this.environmentService.update({
      where: { id },
      data: updateEnvironmentDto,
    });
  }
}
