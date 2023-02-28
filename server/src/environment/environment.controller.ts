import { Controller, Param, Post, Body, Put } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { Environment as EnvironmentModel } from '@prisma/client';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import {
  UpdateEnvironmentDtoParams,
  UpdateEnvironmentDto,
} from './dto/update-environment.dto';
@Controller()
export class EnvironmentController {
  constructor(private readonly environmentService: EnvironmentService) {}

  @Post('environment')
  async createEnvironment(
    @Body() createEnvironmentDto: CreateEnvironmentDto,
  ): Promise<EnvironmentModel> {
    const { name, accountId } = createEnvironmentDto;
    return this.environmentService.createEnvironment({
      name,
      account: {
        connect: {
          id: accountId,
        },
      },
    });
  }

  @Put('environment/:id')
  async updateEnvironment(
    @Param('id') { id }: UpdateEnvironmentDtoParams,
    @Body() updateEnvironmentDto: UpdateEnvironmentDto,
  ): Promise<EnvironmentModel> {
    return this.environmentService.updateEnvironment({
      where: { id },
      data: updateEnvironmentDto,
    });
  }
}
