import { IsNotEmpty, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface ICreateEnvFeatureDto {
  readonly state: boolean;
  readonly featureName: string;
  readonly environmentId: string;
}

export class CreateEnvFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly updatingUser: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly featureName: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly projectId: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly environmentId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly state: boolean;
}
