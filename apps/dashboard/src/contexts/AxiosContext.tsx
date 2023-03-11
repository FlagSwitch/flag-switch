import { createContext, useContext, useMemo } from "react";
import axios, { AxiosInstance } from "axios";

export const AxiosContext = createContext<AxiosInstance>(axios);

export function useAxios() {
  return useContext(AxiosContext);
}

interface AxiosProviderProps {
  children: React.ReactNode;
}
export default function AxiosProvider({ children }: AxiosProviderProps) {
  const axiosInstance = useMemo(() => {
    const axiosInstance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });

    axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return axiosInstance;
  }, []);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
}
