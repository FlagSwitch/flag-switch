import { Controller, Get } from "@nestjs/common";
import { FeatureTypeService } from "./featureType.service";
import { FeatureType as FeatureTypeModel } from "@prisma/client";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Feature Type")
@Controller({
  path: "feature-type",
})
export class FeatureTypeController {
  constructor(private readonly featureTypeService: FeatureTypeService) {}

  @ApiBearerAuth()
  @Get()
  async getFeatureTypes(): Promise<FeatureTypeModel[]> {
    return this.featureTypeService.findMany({});
  }
}
