import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { EnvironmentService } from "./environment.service";
import { Environment as EnvironmentModel } from "@prisma/client";
import {
  CreateEnvironmentDto,
  UpdateEnvironmentDtoParams,
  UpdateEnvironmentDto,
} from "dto-types";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Environment")
@Controller({
  path: "environment",
})
export class EnvironmentController {
  constructor(private readonly environmentService: EnvironmentService) {}

  @ApiBearerAuth()
  @Post()
  async createEnvironment(
    @Body() createEnvironmentDto: CreateEnvironmentDto
  ): Promise<EnvironmentModel> {
    const { name } = createEnvironmentDto;
    return this.environmentService.create({
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
