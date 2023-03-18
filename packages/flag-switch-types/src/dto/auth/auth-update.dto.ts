import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, MinLength } from "class-validator";

export interface IAuthUpdateDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly password?: string;
  readonly oldPassword?: string;
}

export class AuthUpdateDto implements IAuthUpdateDto {
  @ApiProperty({ example: "John" })
  @IsOptional()
  @IsNotEmpty({ message: "mustBeNotEmpty" })
  firstName?: string;

  @ApiProperty({ example: "Doe" })
  @IsOptional()
  @IsNotEmpty({ message: "mustBeNotEmpty" })
  lastName?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(6)
  password?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: "mustBeNotEmpty" })
  oldPassword: string;
}
