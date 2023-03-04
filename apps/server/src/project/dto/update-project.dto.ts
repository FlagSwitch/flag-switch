import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProjectDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly description: string;
}

export class UpdateProjectDtoParams {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
