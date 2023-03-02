import { Controller, Param, Post, Body, Put } from '@nestjs/common';
import { StateService } from './state.service';
import { State as StateModel } from '@prisma/client';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto, UpdateStateDtoParams } from './dto/update-state.dto';

@Controller()
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post('state')
  async createState(
    @Body() createStateDto: CreateStateDto,
  ): Promise<StateModel> {
    const { name, projectId } = createStateDto;
    return this.stateService.createState({
      name,
      project: {
        connect: {
          id: projectId,
        },
      },
    });
  }

  @Put('state/:id')
  async updateState(
    @Param('id') { id }: UpdateStateDtoParams,
    @Body() updateStateDto: UpdateStateDto,
  ): Promise<StateModel> {
    return this.stateService.updateState({
      where: { id },
      data: updateStateDto,
    });
  }
}
