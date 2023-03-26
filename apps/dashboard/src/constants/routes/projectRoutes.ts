export const projects = "projects";

export const projectsBase = `/${projects}`;

export const projectsCreate = `${projectsBase}/create`;

export const projectFeatureCreate = (project: string) =>
  `${projectsBase}/${project}/feature-create`;
