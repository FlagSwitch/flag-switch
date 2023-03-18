import { IsNotEmpty, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateEnvFeatureDto {
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
