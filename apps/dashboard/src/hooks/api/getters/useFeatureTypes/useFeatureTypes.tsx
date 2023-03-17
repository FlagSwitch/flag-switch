import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { FeatureType } from "prisma-client";
import { useAxios } from "contexts/AxiosContext";

export interface IUseFeatureTypesOutput {
  data?: FeatureType[];
  loading: boolean;
  error?: Error | null;
  isFetched: boolean;
  isSuccess: boolean;
}

export const useFeatureTypes = (): IUseFeatureTypesOutput => {
  const axios = useAxios();
  const getFeatureTypes = async () => {
    return axios
      .get("http://localhost:3000/api/feature-type")
      .then((res: AxiosResponse<FeatureType[], AxiosError>) => res.data);
  };

  const { isLoading, error, data, isFetched, isSuccess } = useQuery<
    FeatureType[],
    AxiosError
  >({
    queryKey: ["featureTypes"],
    queryFn: getFeatureTypes,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    loading: isLoading,
    error,
    isFetched,
    isSuccess,
  };
};
