import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Features from "../components/FeaturesPage/Features";
import Users from "../components/UsersPage/Users";
import Projects from "../components/ProjectsPage/Projects";
import Overview from "../components/OverviewPage/Overview";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/projects",
          element: <Projects />,
        },
        {
            path: "/features",
            element: <Features />,
        },
        {
            path: "/users",
            element: <Users />,
        },
        {
            path: "/overview",
            element: <Overview />,
        },
      ],
    },
]);

export default router;