import { IsNotEmpty, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { FeatureTypeEnum } from "prisma-client";

export interface ICreateFeatureDto {
  readonly name: string;
  readonly projectId: string;
  readonly description: string;
  readonly createdBy: string;
  readonly type: FeatureTypeEnum;
}

export class CreateFeatureDto implements ICreateFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly projectId: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly createdBy: string;

  @IsEnum(FeatureTypeEnum)
  readonly type: FeatureTypeEnum;
}
