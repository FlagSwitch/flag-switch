import { Controller, Param, Post, Body, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account as AccountModel } from '@prisma/client';
import { CreateAccountDto } from './dto/create-account.dto';
import {
  UpdateAccountDto,
  UpdateAccountDtoParams,
} from './dto/update-account.dto';
@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('account')
  async createAccount(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<AccountModel> {
    return this.accountService.createAccount(createAccountDto);
  }

  @Put('account/:id')
  async updateAccount(
    @Param('id') { id }: UpdateAccountDtoParams,
    @Body() updateUserDto: UpdateAccountDto,
  ): Promise<AccountModel> {
    return this.accountService.updateAccount({
      where: { id },
      data: updateUserDto,
    });
  }
}
