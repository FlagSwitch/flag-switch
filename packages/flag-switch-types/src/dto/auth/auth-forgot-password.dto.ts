import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";
import { Transform } from "class-transformer";

export interface IAuthForgotPasswordDto {
  readonly email: string;
}

export class AuthForgotPasswordDto implements IAuthForgotPasswordDto {
  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase().trim())
  @IsEmail()
  email: string;
}
