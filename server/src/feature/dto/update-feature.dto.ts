import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateFeatureDtoParams {
  @ApiProperty()
  @IsUUID()
  id: string;
}
