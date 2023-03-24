import { IsNotEmpty, IsNumber, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface IUpdateDashboardUserDto {
  readonly name: string;
  readonly email: string;
}

export class UpdateDashboardUserDto implements IUpdateDashboardUserDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}

export interface IUpdateDashboardUserDtoParams {
  readonly id: number;
}

export class UpdateDashboardUserDtoParams {
  @ApiProperty()
  @IsNumber()
  readonly id: number;
}
