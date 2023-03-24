import { Controller, Param, Post, Body, Put } from "@nestjs/common";
import { StateService } from "./state.service";
import { State as StateModel } from "@prisma/client";
import {
  CreateStateDto,
  UpdateStateDto,
  UpdateStateDtoParams,
} from "dto-types";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("State")
@Controller({
  path: "state",
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
  @Put(":projectId/:id")
  async updateState(
    @Param() { id, projectId }: UpdateStateDtoParams,
    @Body() updateStateDto: UpdateStateDto
  ): Promise<StateModel> {
    return this.stateService.update({
      where: {
        id_projectId: {
          id,
          projectId,
        },
      },
      data: updateStateDto,
    });
  }
}
