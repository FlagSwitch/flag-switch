import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface ICreateProjectDto {
  readonly name: string;
  readonly id: string;
  readonly description: string;
}
export class CreateProjectDto implements ICreateProjectDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly description: string;
}
