import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateAccountDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}
