import { StateService } from './state.service';
import { State as StateModel } from '@prisma/client';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto, UpdateStateDtoParams } from './dto/update-state.dto';
export declare class StateController {
    private readonly stateService;
    constructor(stateService: StateService);
    createState(createStateDto: CreateStateDto): Promise<StateModel>;
    updateState({ id }: UpdateStateDtoParams, updateStateDto: UpdateStateDto): Promise<StateModel>;
}
