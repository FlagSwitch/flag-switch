import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface IUpdateStateDto {
  readonly name: string;
}

export class UpdateStateDto implements IUpdateStateDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export interface IUpdateStateDtoParams {
  readonly id: string;
  readonly projectId: string;
}


export class UpdateStateDtoParams implements IUpdateStateDtoParams {
  @ApiProperty()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  projectId: string;
}
