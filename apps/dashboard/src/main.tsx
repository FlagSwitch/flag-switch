import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./themes/ThemeProvider";
import { AnnouncerProvider } from "./components/common/Announcer/AnnouncerProvider/AnnouncerProvider";
import UIProvider from "./providers/UIProvider/UIProvider";
import { SidePanelProvider } from "./contexts/SidePanelContext";
import AxiosProvider from "./contexts/AxiosContext";
import "./index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <UIProvider darkmode={false}>
          <ThemeProvider>
            <AnnouncerProvider>
              <SidePanelProvider>
                <App />
              </SidePanelProvider>
            </AnnouncerProvider>
          </ThemeProvider>
        </UIProvider>
      </QueryClientProvider>
    </AxiosProvider>
  </React.StrictMode>
);
