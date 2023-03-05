import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./themes/ThemeProvider";
import { AnnouncerProvider } from "./components/common/Announcer/AnnouncerProvider/AnnouncerProvider";
import UIProvider from "./providers/UIProvider/UIProvider";
import { SidePanelProvider } from "./contexts/SidePanelContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UIProvider darkmode={false}>
      <ThemeProvider>
        <AnnouncerProvider>
          <SidePanelProvider>
            <App />
          </SidePanelProvider>
        </AnnouncerProvider>
      </ThemeProvider>
    </UIProvider>
  </React.StrictMode>
);
