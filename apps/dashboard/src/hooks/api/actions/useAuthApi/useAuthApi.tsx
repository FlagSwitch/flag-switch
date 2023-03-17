import { useMutation, UseMutateAsyncFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { DashboardUser } from "prisma-client";
import { useAxios } from "contexts/AxiosContext";

export interface IAuthEndpointLoginResponse {
  user: DashboardUser;
  token: string;
}

export interface ILoginAuthEndpointOutput {
  data: IAuthEndpointLoginResponse | undefined;
  login: UseMutateAsyncFunction<
    IAuthEndpointLoginResponse,
    Error,
    { email: string; password: string }
  >;
  loading: boolean;
  isSucess: boolean;
  error?: Error | null;
}

export const useAuthApi = (): ILoginAuthEndpointOutput => {
  const axios = useAxios();
  const mutation = useMutation<
    IAuthEndpointLoginResponse,
    Error,
    { email: string; password: string }
  >((loginPayload) => {
    return axios
      .post("http://localhost:3000/api/auth/email/login", loginPayload)
      .then(
        (res: AxiosResponse<IAuthEndpointLoginResponse, Error>) => res.data
      );
  });

  return {
    data: mutation.data,
    login: mutation.mutateAsync,
    isSucess: mutation.isSuccess,
    loading: mutation.isLoading,
    error: mutation.error,
  };
};
