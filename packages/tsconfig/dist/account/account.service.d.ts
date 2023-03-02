import { PrismaService } from '../prisma.service';
import { Account, Prisma } from 'prisma-client';
export declare class AccountService {
    private prisma;
    constructor(prisma: PrismaService);
    account(accountWhereUniqueInput: Prisma.AccountWhereUniqueInput): Promise<Account | null>;
    accounts(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.AccountWhereUniqueInput;
        where?: Prisma.AccountWhereInput;
        orderBy?: Prisma.AccountOrderByWithRelationAndSearchRelevanceInput;
    }): Promise<Account[]>;
    createAccount(data: Prisma.AccountCreateInput): Promise<Account>;
    updateAccount(params: {
        where: Prisma.AccountWhereUniqueInput;
        data: Prisma.AccountUpdateInput;
    }): Promise<Account>;
    deleteAccount(where: Prisma.AccountWhereUniqueInput): Promise<Account>;
}
