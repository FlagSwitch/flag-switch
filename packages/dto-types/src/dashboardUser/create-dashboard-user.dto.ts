import { IsNotEmpty, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface ICreateDashboardUserDto {
  readonly name: string;
  readonly email: string;
}

export class CreateDashboardUserDto implements ICreateDashboardUserDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
