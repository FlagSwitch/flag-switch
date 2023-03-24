import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MinLength } from "class-validator";
import { Transform } from "class-transformer";

export interface IAuthRegisterLoginDto {
  readonly email: string;
  readonly password: string;
}

export class AuthRegisterLoginDto implements IAuthRegisterLoginDto {
  @ApiProperty({ example: "test1@example.com" })
  @Transform(({ value }) => value.toLowerCase().trim())
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  password: string;
}
