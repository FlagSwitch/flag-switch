import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from './router';
import { ThemeProvider } from './themes/ThemeProvider';
import UIProvider from './providers/UIProvider/UIProvider';
import { SidePanelProvider} from './contexts/SidePanelContext';
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UIProvider darkmode={false}>
      <ThemeProvider>
        <SidePanelProvider>
            <RouterProvider router={router} />
        </SidePanelProvider>
      </ThemeProvider>
    </UIProvider>
  </React.StrictMode>,
)
