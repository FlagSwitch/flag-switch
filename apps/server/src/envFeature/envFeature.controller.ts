import { Controller, Post, Body, Put } from "@nestjs/common";
import { EnvFeatureService } from "./envFeature.service";
import { EnvFeature as EnvFeatureModel } from "@prisma/client";
import { CreateEnvFeatureDto, UpdateEnvFeatureDto } from "dto-types";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Env Feature")
@Controller({
  path: "env-feature",
})
export class EnvFeatureController {
  constructor(private readonly envFeatureService: EnvFeatureService) {}

  @ApiBearerAuth()
  @Post()
  async createEnvFeature(
    @Body() createEnvFeatureDto: CreateEnvFeatureDto
  ): Promise<EnvFeatureModel> {
    const { state, updatingUser, environmentId, featureName, projectId } =
      createEnvFeatureDto;
    return this.envFeatureService.create({
      state,
      updatingUser,
      project: {
        connect: {
          id: projectId,
        },
      },
      feature: {
        connect: {
          projectId_name: {
            name: featureName,
            projectId,
          },
        },
      },
      environment: {
        connect: {
          id: environmentId,
        },
      },
    });
  }

  @ApiBearerAuth()
  @Put(":id")
  async updateEnvfeature(
    @Body() updateEnvFeatureDto: UpdateEnvFeatureDto
  ): Promise<EnvFeatureModel> {
    const { state, environmentId, featureName } = updateEnvFeatureDto;
    return this.envFeatureService.update({
      where: {
        featureName_environmentId: { featureName, environmentId },
      },
      data: {
        state,
      },
    });
  }
}
