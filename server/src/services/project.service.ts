import { TCreateProject } from "types/project.types";
import { projectRepository } from "../db/respositories";
import { Project } from "@prisma/client";

const createProject = async (
  createProjectFields: TCreateProject
): Promise<Project> => {
  return projectRepository.create(createProjectFields);
};

export { createProject };
