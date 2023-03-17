import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { DashboardUser } from "prisma-client";
import { useAxios } from "contexts/AxiosContext";
export type IAuthEndpointUserResponse = DashboardUser;

export interface IUseAuthEndpointOutput {
  data?: IAuthEndpointUserResponse;
  refetch: any;
  loading: boolean;
  error?: Error | null;
  isFetched: boolean;
  isSuccess: boolean;
}

export const useAuthEndpoint = (): IUseAuthEndpointOutput => {
  const axios = useAxios();
  const getUser = async () => {
    return axios
      .get("http://localhost:3000/api/auth/me")
      .then(
        (res: AxiosResponse<IAuthEndpointUserResponse, AxiosError>) => res.data
      );
  };

  const { isLoading, error, data, refetch, isFetched, isSuccess } = useQuery<
    IAuthEndpointUserResponse,
    AxiosError
  >({
    queryKey: ["authData"],
    queryFn: getUser,
    staleTime: Infinity,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    refetch,
    loading: isLoading,
    error,
    isFetched,
    isSuccess,
  };
};
