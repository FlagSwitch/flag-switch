import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User as UserModel } from "@prisma/client";
import { CreateUserDto, UpdateUserDto, UpdateUserDtoParams } from "dto-types";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("User")
@Controller({
  path: "user",
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    const { name, userId } = createUserDto;
    return this.userService.create({
      id: userId,
      name,
    });
  }

  @ApiBearerAuth()
  @Put(":id")
  async updateUser(
    @Param("id") { id }: UpdateUserDtoParams,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserModel> {
    return this.userService.update({
      where: { id },
      data: updateUserDto,
    });
  }
}
