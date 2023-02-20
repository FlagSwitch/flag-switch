import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { DarkModeProvider } from './context/DarkModeContext';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <ProSidebarProvider>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </ProSidebarProvider>
    </DarkModeProvider>
    
  </React.StrictMode>,
)
