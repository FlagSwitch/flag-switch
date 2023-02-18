import { TCreateFeatureToggle } from 'types/featureToggle.types'
import {  featureToggleRepository, projectRepository } from '../db/respositories'

const createFeatureToggle = async (createFeatureToggleFields: TCreateFeatureToggle) => {
    const { projectId } = createFeatureToggleFields;
    const project = await projectRepository.getById({
        projectId,
        include: {
            environments: true
        }
    });
    return await clientRepository.create(createClientFields);
}

export {
    createClient
}