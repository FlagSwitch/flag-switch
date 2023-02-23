import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from './router';
import { DarkModeProvider } from './context/DarkModeContext';
import { SidePanelProvider} from './context//SidePanelContext';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './themes/theme';
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <SidePanelProvider>
        <DarkModeProvider>
          <RouterProvider router={router} />
        </DarkModeProvider>
      </SidePanelProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
