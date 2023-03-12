import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { FeatureService } from "./feature.service";
import { Feature as FeatureModel } from "@prisma/client";
import { CreateFeatureDto } from "./dto/create-feature.dto";
import {
  UpdateFeatureDto,
  UpdateFeatureDtoParams,
} from "./dto/update-feature.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Feature")
@Controller({
  path: 'feature'
})
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @ApiBearerAuth()
  @Post()
  async createFeature(
    @Body() createFeatureDto: CreateFeatureDto
  ): Promise<FeatureModel> {
    const { featureId, name, type, projectId, createdBy } = createFeatureDto;
    return this.featureService.create({
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

  @ApiBearerAuth()
  @Put("feature/:id")
  async updateFeature(
    @Param("id") { id }: UpdateFeatureDtoParams,
    @Body() updateFeatureDto: UpdateFeatureDto
  ): Promise<FeatureModel> {
    return this.featureService.update({
      where: { id },
      data: updateFeatureDto,
    });
  }
}
