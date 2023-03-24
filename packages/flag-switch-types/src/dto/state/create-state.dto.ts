import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface ICreateStateDto {
  readonly name: string;
  readonly stateId: string;
  readonly projectId: string;
}

export class CreateStateDto implements ICreateStateDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly stateId: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly projectId: string;
}
