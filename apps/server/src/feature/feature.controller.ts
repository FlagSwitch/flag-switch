import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { FeatureService } from "./feature.service";
import { Feature as FeatureModel } from "@prisma/client";
import {
  CreateFeatureDto,
  UpdateFeatureDto,
  UpdateFeatureDtoParams,
} from "dto-types";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { featureRoutes } from "router-constants";
@ApiTags("Feature")
@Controller({
  path: featureRoutes.feature,
})
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @ApiBearerAuth()
  @Post()
  async createFeature(
    @Body() createFeatureDto: CreateFeatureDto
  ): Promise<FeatureModel> {
    const { name, type, projectId, createdBy } = createFeatureDto;
    return this.featureService.create({
      name,
      createdBy,
      type: {
        connect: {
          name: type,
        },
      },
      project: {
        connect: {
          id: projectId,
        },
      },
    });
  }

  @ApiBearerAuth()
  @Put("feature/:projectId/:name")
  async updateFeature(
    @Param() { name, projectId }: UpdateFeatureDtoParams,
    @Body() updateFeatureDto: UpdateFeatureDto
  ): Promise<FeatureModel> {
    return this.featureService.update({
      where: { projectId_name: { projectId, name } },
      data: updateFeatureDto,
    });
  }
}
