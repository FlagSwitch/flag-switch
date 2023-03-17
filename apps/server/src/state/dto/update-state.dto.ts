import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateStateDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateStateDtoParams {
  @ApiProperty()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  projectId: string;
}
