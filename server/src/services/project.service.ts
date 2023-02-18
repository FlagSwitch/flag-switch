import { TCreateProject } from 'types/project.types'
import { projectRepository } from '../db/respositories'

const createProject = async (createProjectFields: TCreateProject) => {
    return await projectRepository.create(createProjectFields);
}

export {
    createProject
}