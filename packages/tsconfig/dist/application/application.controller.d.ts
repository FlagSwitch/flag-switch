import { ApplicationService } from './application.service';
import { Application as ApplicationModel } from '@prisma/client';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto, UpdateApplicationDtoParams } from './dto/update-application.dto';
export declare class AccountController {
    private readonly applicationService;
    constructor(applicationService: ApplicationService);
    createAccount(createApplicationDto: CreateApplicationDto): Promise<ApplicationModel>;
    updateAccount({ id }: UpdateApplicationDtoParams, updateApplicationDto: UpdateApplicationDto): Promise<ApplicationModel>;
}
