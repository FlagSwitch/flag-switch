import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ProjectWithRelationsCount } from "prisma-client";
import { useAxios } from "contexts/AxiosContext";
import { projectRoutes } from "router-constants";
export interface IUseProjectsOutput {
  projects?: ProjectWithRelationsCount[];
  loading: boolean;
  error?: Error | null;
  isFetched: boolean;
  isSuccess: boolean;
}

const useProjects = (): IUseProjectsOutput => {
  const axios = useAxios();
  const getProjects = async () => {
    return axios
      .get(`http://localhost:3000/${projectRoutes.projectsBase}`)
      .then(
        (res: AxiosResponse<ProjectWithRelationsCount[], AxiosError>) =>
          res.data
      );
  };

  const { isLoading, error, data, isFetched, isSuccess } = useQuery<
    ProjectWithRelationsCount[],
    AxiosError
  >({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchOnWindowFocus: false,
  });

  return {
    projects: data,
    loading: isLoading,
    error,
    isFetched,
    isSuccess,
  };
};

export default useProjects;
