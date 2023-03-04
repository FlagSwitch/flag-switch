import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { FeatureService } from "./feature.service";
import { Feature as FeatureModel } from "@prisma/client";
import { CreateFeatureDto } from "./dto/create-feature.dto";
import {
  UpdateFeatureDto,
  UpdateFeatureDtoParams,
} from "./dto/update-feature.dto";
@Controller()
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @Post("feature")
  async createAccount(
    @Body() createFeatureDto: CreateFeatureDto
  ): Promise<FeatureModel> {
    const { featureId, name, type, projectId, createdBy } = createFeatureDto;
    return this.featureService.createFeature({
      id: featureId,
      name,
      type,
      createdBy,
      project: {
        connect: {
          id: projectId,
        },
      },
    });
  }

  @Put("feature/:id")
  async updateFeature(
    @Param("id") { id }: UpdateFeatureDtoParams,
    @Body() updateFeatureDto: UpdateFeatureDto
  ): Promise<FeatureModel> {
    return this.featureService.updateFeature({
      where: { id },
      data: updateFeatureDto,
    });
  }
}
