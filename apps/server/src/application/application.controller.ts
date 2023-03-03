import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { ApplicationService } from "./application.service";
import { Application as ApplicationModel } from "@prisma/client";
import { CreateApplicationDto } from "./dto/create-application.dto";
import {
  UpdateApplicationDto,
  UpdateApplicationDtoParams,
} from "./dto/update-application.dto";

@Controller()
export class AccountController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post("application")
  async createAccount(
    @Body() createApplicationDto: CreateApplicationDto
  ): Promise<ApplicationModel> {
    const { name, accountId } = createApplicationDto;
    return this.applicationService.createApplication({
      name,
      account: {
        connect: {
          id: accountId,
        },
      },
    });
  }

  @Put("application/:id")
  async updateAccount(
    @Param("id") { id }: UpdateApplicationDtoParams,
    @Body() updateApplicationDto: UpdateApplicationDto
  ): Promise<ApplicationModel> {
    return this.applicationService.updateApplication({
      where: { id },
      data: updateApplicationDto,
    });
  }
}
