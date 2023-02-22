import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkModeProvider } from './context/DarkModeContext';
import { SidePanelProvider} from './context//SidePanelContext';
import { RouterProvider } from "react-router-dom";
import router from './router';
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SidePanelProvider>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </SidePanelProvider>
  </React.StrictMode>,
)
