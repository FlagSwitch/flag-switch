import React from "react";
import Layout from "./components/layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Frame: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Layout />
  </QueryClientProvider>
);
