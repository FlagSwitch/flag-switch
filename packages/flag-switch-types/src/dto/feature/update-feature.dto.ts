import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface IUpdateFeatureDto {
  readonly name: string;
}

export class UpdateFeatureDto implements IUpdateFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export interface IUpdateFeatureDtoParams {
  readonly name: string;
  readonly projectId: string;
}
export class UpdateFeatureDtoParams implements IUpdateFeatureDtoParams {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly projectId: string;
}
