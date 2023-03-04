import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { DashboardUserService } from "./dashboardUser.service";
import { DashboardUser as DashboardUserModel } from "@prisma/client";
import { CreateDashboardUserDto } from "./dto/create-dashboard-user.dto";
import {
  UpdateDashboardUserDto,
  UpdateDashboardUserDtoParams,
} from "./dto/update-dashboard-user.dto";
@Controller()
export class DashboardUserController {
  constructor(private readonly dashboardUserService: DashboardUserService) {}

  @Post("dashboard-user")
  async createDashboardUser(
    @Body() createDashboardUserDto: CreateDashboardUserDto
  ): Promise<DashboardUserModel> {
    const { name, email, dashboardUserId } = createDashboardUserDto;
    return this.dashboardUserService.createDashboardUser({
      id: dashboardUserId,
      name,
      email,
    });
  }

  @Put("dashboard-user/:id")
  async updateUser(
    @Param("id") { id }: UpdateDashboardUserDtoParams,
    @Body() updateDashboardUserDto: UpdateDashboardUserDto
  ): Promise<DashboardUserModel> {
    return this.dashboardUserService.updateDashboardUser({
      where: { id },
      data: updateDashboardUserDto,
    });
  }
}
