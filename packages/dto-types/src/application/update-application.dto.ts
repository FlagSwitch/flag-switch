import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export interface IUpdateApplicationDto {
  readonly name: string;
}
export class UpdateApplicationDto implements IUpdateApplicationDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export interface IUpdateApplicationDtoParams {
  readonly id: string;
}

export class UpdateApplicationDtoParams implements IUpdateApplicationDtoParams {
  @ApiProperty()
  id: string;
}
