import { Controller, Post, Body, Put } from "@nestjs/common";
import { EnvFeatureService } from "./envFeature.service";
import { EnvFeature as EnvFeatureModel } from "@prisma/client";
import { CreateEnvFeatureDto } from "./dto/create-env-feature.dto";
import { UpdateEnvFeatureDto } from "./dto/update-env-feature.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Env Feature")
@Controller({
  path: 'env-feature'
})
export class EnvFeatureController {
  constructor(private readonly envFeatureService: EnvFeatureService) {}

  @ApiBearerAuth()
  @Post()
  async createEnvFeature(
    @Body() createEnvFeatureDto: CreateEnvFeatureDto
  ): Promise<EnvFeatureModel> {
    const { state, updatingUser, environmentId, featureToggleId } =
      createEnvFeatureDto;
    return this.envFeatureService.create({
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

  @ApiBearerAuth()
  @Put(":id")
  async updateEnvfeature(
    @Body() updateEnvFeatureDto: UpdateEnvFeatureDto
  ): Promise<EnvFeatureModel> {
    const { state, environmentId, featureToggleId } = updateEnvFeatureDto;
    return this.envFeatureService.update({
      where: {
        featureToggleId_environmentId: { featureToggleId, environmentId },
      },
      data: {
        state,
      },
    });
  }
}
