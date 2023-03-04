import { Controller, Post, Body, Put } from "@nestjs/common";
import { EnvFeatureService } from "./envFeature.service";
import { EnvFeature as EnvFeatureModel } from "@prisma/client";
import { CreateEnvFeatureDto } from "./dto/create-env-feature.dto";
import { UpdateEnvFeatureDto } from "./dto/update-env-feature.dto";
@Controller()
export class EnvFeatureController {
  constructor(private readonly envFeatureService: EnvFeatureService) {}

  @Post("env-feature")
  async createEnvFeature(
    @Body() createEnvFeatureDto: CreateEnvFeatureDto
  ): Promise<EnvFeatureModel> {
    const { state, updatingUser, environmentId, featureToggleId } =
      createEnvFeatureDto;
    return this.envFeatureService.createEnvFeature({
      state,
      updatingUser,
      featureToggle: {
        connect: {
          id: featureToggleId,
        },
      },
      environment: {
        connect: {
          id: environmentId,
        },
      },
    });
  }

  @Put("env-feature/:id")
  async updateEnvfeature(
    @Body() updateEnvFeatureDto: UpdateEnvFeatureDto
  ): Promise<EnvFeatureModel> {
    const { state, environmentId, featureToggleId } = updateEnvFeatureDto;
    return this.envFeatureService.updateEnvFeature({
      where: {
        featureToggleId_environmentId: { featureToggleId, environmentId },
      },
      data: {
        state,
      },
    });
  }
}
