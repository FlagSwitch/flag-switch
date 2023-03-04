import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateApplicationDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateApplicationDtoParams {
  @ApiProperty()
  id: string;
}
