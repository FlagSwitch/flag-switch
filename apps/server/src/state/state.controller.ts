import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { StateService } from "./state.service";
import { State as StateModel } from "@prisma/client";
import { CreateStateDto } from "./dto/create-state.dto";
import { UpdateStateDto, UpdateStateDtoParams } from "./dto/update-state.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("State")
@Controller({
  path: 'state'
})
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @ApiBearerAuth()
  @Post()
  async createState(
    @Body() createStateDto: CreateStateDto
  ): Promise<StateModel> {
    const { name, projectId, stateId } = createStateDto;
    return this.stateService.create({
      id: stateId,
      name,
      project: {
        connect: {
          id: projectId,
        },
      },
    });
  }

  @ApiBearerAuth()
  @Put(":id")
  async updateState(
    @Param("id") { id }: UpdateStateDtoParams,
    @Body() updateStateDto: UpdateStateDto
  ): Promise<StateModel> {
    return this.stateService.update({
      where: { id },
      data: updateStateDto,
    });
  }
}
