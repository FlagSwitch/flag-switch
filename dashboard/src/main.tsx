import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Projects from './components/ProjectsPage/Projects'
import Users from './components/UsersPage/Users'
import Features from './components/FeaturesPage/Features'
import Overview from './components/OverviewPage/Overview'
import { DarkModeProvider } from './context/DarkModeContext';
import { SidePanelProvider} from './context//SidePanelContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SidePanelProvider>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </SidePanelProvider>
  </React.StrictMode>,
)
