import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserDtoParams } from './dto/update-user.dto';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    const { name, accountId } = createUserDto;
    return this.userService.createUser({
      name,
      accout: {
        connect: {
          id: accountId,
        },
      },
    });
  }

  @Put('user/:id')
  async updateUser(
    @Param('id') { id }: UpdateUserDtoParams,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id },
      data: updateUserDto,
    });
  }
}
