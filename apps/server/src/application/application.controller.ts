import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { ApplicationService } from "./application.service";
import { Application as ApplicationModel } from "@prisma/client";
import { CreateApplicationDto } from "./dto/create-application.dto";
import {
  UpdateApplicationDto,
  UpdateApplicationDtoParams,
} from "./dto/update-application.dto";

import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Application")
@Controller({
  path: 'application'
})
export class AccountController {
  constructor(private readonly applicationService: ApplicationService) {}

  @ApiBearerAuth()
  @Post()
  async createApplication(
    @Body() createApplicationDto: CreateApplicationDto
  ): Promise<ApplicationModel> {
    const { name, applicationId } = createApplicationDto;
    return this.applicationService.createApplication({
      id: applicationId,
      name,
    });
  }

  @ApiBearerAuth()
  @Put(":id")
  async updateApplication(
    @Param("id") { id }: UpdateApplicationDtoParams,
    @Body() updateApplicationDto: UpdateApplicationDto
  ): Promise<ApplicationModel> {
    return this.applicationService.updateApplication({
      where: { id },
      data: updateApplicationDto,
    });
  }
}
