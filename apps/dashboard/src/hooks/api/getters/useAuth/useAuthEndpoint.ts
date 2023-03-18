import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { DashboardUser } from "prisma-client";
import { useAxios } from "contexts/AxiosContext";
export type IAuthEndpointUserResponse = DashboardUser;

export interface IUseAuthEndpointOutput {
  data?: IAuthEndpointUserResponse;
  loading: boolean;
  error?: Error | null;
  isFetched: boolean;
  isSuccess: boolean;
}

export const useAuthEndpoint = (): IUseAuthEndpointOutput => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const getUser = async () => {
    return axios
      .get("http://localhost:3000/api/auth/me")
      .then(
        (res: AxiosResponse<IAuthEndpointUserResponse, AxiosError>) => res.data
      );
  };

  const { isLoading, error, data, isFetched, isSuccess } = useQuery<
    IAuthEndpointUserResponse,
    AxiosError
  >({
    queryKey: ["authData"],
    queryFn: getUser,
    retry: false,
    refetchInterval: 15000,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    keepPreviousData: false,
    onError: () => {
      queryClient.setQueryData(["authData"], null);
    }
  });

  return {
    data,
    loading: isLoading,
    error,
    isFetched,
    isSuccess,
  };
};
