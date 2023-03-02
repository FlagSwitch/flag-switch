import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserDtoParams } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<UserModel>;
    updateUser({ id }: UpdateUserDtoParams, updateUserDto: UpdateUserDto): Promise<UserModel>;
}
