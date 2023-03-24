import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";

export interface IAuthConfirmLoginDto {
  readonly email: string;
  readonly password: string;
}

export class AuthEmailLoginDto implements IAuthConfirmLoginDto {
  @ApiProperty({ example: "test1@example.com" })
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
