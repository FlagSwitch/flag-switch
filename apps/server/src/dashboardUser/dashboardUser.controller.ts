import { Controller, Param, Body, Put } from "@nestjs/common";
import { DashboardUserService } from "./dashboardUser.service";
import { DashboardUser as DashboardUserModel } from "@prisma/client";
import {
  UpdateDashboardUserDto,
  UpdateDashboardUserDtoParams,
} from "./dto/update-dashboard-user.dto";
@Controller()
export class DashboardUserController {
  constructor(private readonly dashboardUserService: DashboardUserService) {}

  @Put("dashboard-user/:id")
  async updateUser(
    @Param("id") { id }: UpdateDashboardUserDtoParams,
    @Body() updateDashboardUserDto: UpdateDashboardUserDto
  ): Promise<DashboardUserModel> {
    return this.dashboardUserService.update({
      where: { id },
      data: updateDashboardUserDto,
    });
  }
}
