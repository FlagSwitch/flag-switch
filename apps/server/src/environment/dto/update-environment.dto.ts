import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateEnvironmentDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateEnvironmentDtoParams {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
