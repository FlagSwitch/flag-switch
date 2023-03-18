import { FC } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectWithRelationsCount } from "prisma-client";
import { StyledDivContainer } from "./ProjectList.style";
import useProjects from "hooks/api/getters/useProjects/useProjects";

export const ProjectList: FC = () => {
  const { loading, error, projects } = useProjects();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{`An error has occurred: ${error.message}`}</div>;
  return (
    <StyledDivContainer>
      {projects?.map((project: ProjectWithRelationsCount) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </StyledDivContainer>
  );
};
