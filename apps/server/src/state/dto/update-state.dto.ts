import { IsNotEmpty, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateStateDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateStateDtoParams {
  @ApiProperty()
  @IsUUID()
  id: string;
}
