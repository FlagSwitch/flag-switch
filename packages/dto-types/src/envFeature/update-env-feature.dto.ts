import { IsNotEmpty, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface IUpdateEnvFeatureDto {
  readonly state: boolean;
  readonly featureName: string;
  readonly environmentId: string;
}

export class UpdateEnvFeatureDto implements IUpdateEnvFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly state: boolean;

  @ApiProperty()
  @IsNotEmpty()
  readonly featureName: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly environmentId: string;
}
