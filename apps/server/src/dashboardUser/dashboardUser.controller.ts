import { Controller, Param, Body, Put } from "@nestjs/common";
import { DashboardUserService } from "./dashboardUser.service";
import { DashboardUser as DashboardUserModel } from "@prisma/client";
import {
  UpdateDashboardUserDto,
  UpdateDashboardUserDtoParams,
} from "./dto/update-dashboard-user.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Dashboard User")
@Controller({
  path: 'dashboard-user'
})
export class DashboardUserController {
  constructor(private readonly dashboardUserService: DashboardUserService) {}

  @ApiBearerAuth()
  @Put(":id")
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
