import { EnvironmentService } from './environment.service';
import { Environment as EnvironmentModel } from '@prisma/client';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { UpdateEnvironmentDtoParams, UpdateEnvironmentDto } from './dto/update-environment.dto';
export declare class EnvironmentController {
    private readonly environmentService;
    constructor(environmentService: EnvironmentService);
    createEnvironment(createEnvironmentDto: CreateEnvironmentDto): Promise<EnvironmentModel>;
    updateEnvironment({ id }: UpdateEnvironmentDtoParams, updateEnvironmentDto: UpdateEnvironmentDto): Promise<EnvironmentModel>;
}
