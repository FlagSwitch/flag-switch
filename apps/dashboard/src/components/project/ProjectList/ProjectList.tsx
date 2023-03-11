import { FC } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ProjectWithRelationsCount } from "prisma-client";
import { StyledDivContainer } from "./ProjectList.style";
import { useAxios } from "contexts/AxiosContext";

export const ProjectList: FC = () => {
  const axios = useAxios();
  const { isLoading, error, data } = useQuery<
    ProjectWithRelationsCount[],
    Error
  >({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("http://localhost:3000/api/project")
        .then(
          (res: AxiosResponse<ProjectWithRelationsCount[], Error>) => res.data
        ),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{`An error has occurred: ${error.message}`}</div>;
  return (
    <StyledDivContainer>
      {data.map((project: ProjectWithRelationsCount) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </StyledDivContainer>
  );
};
