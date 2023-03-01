import { IsNotEmpty, IsUUID, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { FeatureType } from '@prisma/client';

export class CreateFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  readonly projectId: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly createdBy: string;

  @IsEnum(FeatureType)
  readonly type: FeatureType;
}
