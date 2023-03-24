import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface IUpdateEnvironmentDto {
  readonly name: string;
}

export class UpdateEnvironmentDto implements IUpdateEnvironmentDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export interface IUpdateEnvironmentDtoParams {
  readonly id: string;
}

export class UpdateEnvironmentDtoParams implements IUpdateEnvironmentDtoParams {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
