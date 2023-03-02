import { DashboardUserService } from './dashboardUser.service';
import { DashboardUser as DashboardUserModel } from '@prisma/client';
import { CreateDashboardUserDto } from './dto/create-dashboard-user.dto';
import { UpdateDashboardUserDto, UpdateDashboardUserDtoParams } from './dto/update-dashboard-user.dto';
export declare class DashboardUserController {
    private readonly dashboardUserService;
    constructor(dashboardUserService: DashboardUserService);
    createDashboardUser(createDashboardUserDto: CreateDashboardUserDto): Promise<DashboardUserModel>;
    updateUser({ id }: UpdateDashboardUserDtoParams, updateDashboardUserDto: UpdateDashboardUserDto): Promise<DashboardUserModel>;
}
