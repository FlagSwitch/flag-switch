import { TCreateEnvironment } from 'types/environment.types'
import { environmentRepository } from '../db/respositories'

const createEnvironment = async (createEnvFields: TCreateEnvironment) => {
    return await environmentRepository.create(createEnvFields);
}

export {
    createEnvironment
}