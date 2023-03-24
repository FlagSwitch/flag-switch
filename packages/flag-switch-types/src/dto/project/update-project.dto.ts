import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface IUpdateProjectDto {
  readonly name: string;
  readonly description: string;
}

export class UpdateProjectDto implements IUpdateProjectDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly description: string;
}

export interface IUpdateProjectDtoParams {
  readonly id: string;
}

export class UpdateProjectDtoParams implements IUpdateProjectDtoParams {
  @ApiProperty()
  @IsNotEmpty()
  readonly id: string;
}
