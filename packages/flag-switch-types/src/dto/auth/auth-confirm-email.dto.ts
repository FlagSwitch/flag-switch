import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export interface IAuthConfirmEmailDto {
  readonly token: string;
}

export class AuthConfirmEmailDto implements IAuthConfirmEmailDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly token: string;
}
