import { AccountService } from './account.service';
import { Account as AccountModel } from '@prisma/client';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto, UpdateAccountDtoParams } from './dto/update-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    createAccount(createAccountDto: CreateAccountDto): Promise<AccountModel>;
    updateAccount({ id }: UpdateAccountDtoParams, updateAccountDto: UpdateAccountDto): Promise<AccountModel>;
}
