import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}

export class UpdateUserDtoParams {
  @ApiProperty()
  @IsUUID()
  id: string;
}
