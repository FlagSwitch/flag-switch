import { IsNotEmpty, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { FeatureTypeEnum } from "@prisma/client";

export class CreateFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly projectId: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly createdBy: string;

  @IsEnum(FeatureTypeEnum)
  readonly type: FeatureTypeEnum;
}
