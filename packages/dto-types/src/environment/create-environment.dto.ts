import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface ICreateEnvironmentDto {
  readonly name: string;
}

export class CreateEnvironmentDto implements ICreateEnvironmentDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

}
