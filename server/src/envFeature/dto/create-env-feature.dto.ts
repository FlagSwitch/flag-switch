import { IsNotEmpty, IsUUID, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEnvFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly updatingUser: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  readonly featureToggleId: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  readonly environmentId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly state: boolean;
}
