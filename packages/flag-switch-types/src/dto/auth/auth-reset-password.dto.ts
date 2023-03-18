import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export interface IAuthResetPasswordDto {
  readonly password: string;
  readonly token: string;
}


export class AuthResetPasswordDto implements IAuthResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  token: string;
}
