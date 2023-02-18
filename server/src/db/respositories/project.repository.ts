import prisma from "../prisma";
import { TCreateProject } from "../../types/project.types";
import { Prisma } from '@prisma/client'


const ProjectDAO = prisma.project;

const create  = async (createProjectFields: TCreateProject) => {
    const { id, name, description, clientId } = createProjectFields;
    const project = await ProjectDAO.create({
        data: {
            id,
            name,
            description,
            clientId,
        }
    });
    return project;
}

const getById = async ({
    projectId,
    include
}: { projectId: string; include: Prisma.ProjectInclude}) => {
    return await ProjectDAO.findUnique({
        include,
        where: {
          id: projectId,
        },
    })
}

export {
    create,
    getById
}