import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface ICreateEnvironmentDto {
  readonly name: string;
  readonly environmentId: string;
}

export class CreateEnvironmentDto implements ICreateEnvironmentDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly environmentId: string;
}
