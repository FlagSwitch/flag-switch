import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateEnvironmentDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly environmentId: string;
}
