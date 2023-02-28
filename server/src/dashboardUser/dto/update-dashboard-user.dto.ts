import { IsNotEmpty, IsUUID, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDashboardUserDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}

export class UpdateDashboardUserDtoParams {
  @ApiProperty()
  @IsUUID()
  id: string;
}
