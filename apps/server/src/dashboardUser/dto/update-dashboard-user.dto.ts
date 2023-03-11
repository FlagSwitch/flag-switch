import { IsNotEmpty, IsNumber, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateDashboardUserDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}

export class UpdateDashboardUserDtoParams {
  @ApiProperty()
  @IsNumber()
  id: number;
}
