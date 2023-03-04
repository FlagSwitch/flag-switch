import { IsNotEmpty, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateEnvFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly updatingUser: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly featureToggleId: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly environmentId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly state: boolean;
}
