import { IsNotEmpty, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateAccountDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateAccountDtoParams {
  @ApiProperty()
  @IsUUID()
  id: string;
}
