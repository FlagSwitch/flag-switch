import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface ICreateApplicationDto {
  readonly name: string;
  readonly applicationId: string;
}
export class CreateApplicationDto implements ICreateApplicationDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly applicationId: string;
}
