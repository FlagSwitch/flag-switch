import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface IUpdateUserDto {
  readonly name: string;
}

export class UpdateUserDto implements IUpdateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}

export interface IUpdateUserDtoParams {
  readonly id: string;
}

export class UpdateUserDtoParams implements IUpdateUserDtoParams {
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}
