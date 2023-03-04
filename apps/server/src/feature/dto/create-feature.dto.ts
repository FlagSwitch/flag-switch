import { IsNotEmpty, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { FeatureType } from "@prisma/client";

export class CreateFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly featureId: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly projectId: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly createdBy: string;

  @IsEnum(FeatureType)
  readonly type: FeatureType;
}
