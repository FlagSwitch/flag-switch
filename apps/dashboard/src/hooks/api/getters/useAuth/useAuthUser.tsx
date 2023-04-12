import { DashboardUser } from "prisma-client";
import { useAuthEndpoint } from "./useAuthEndpoint";

export interface IUseAuthUserOutput {
  user?: DashboardUser;
  loading: boolean;
  error?: Error | null;
  isFetched: boolean;
  isSuccess: boolean;
}

export const useAuthUser = (): IUseAuthUserOutput => {
  const auth = useAuthEndpoint();
  const user = auth.data;

  return {
    user,
    loading: auth.loading,
    error: auth.error,
    isFetched: auth.isFetched,
    isSuccess: auth.isSuccess,
  };
};
