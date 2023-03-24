import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export interface ICreateUserDto {
  readonly userId: string;
  readonly name: string;
  readonly accountId: string;
}
export class CreateUserDto implements ICreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly userId: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly accountId: string;
}
