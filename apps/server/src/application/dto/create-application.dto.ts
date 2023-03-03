import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateApplicationDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly accountId: string;
}
