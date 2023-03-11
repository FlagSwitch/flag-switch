import { createBrowserRouter } from "react-router-dom";
import { App } from "../Frame";
import { Projects } from "../components/project/Projects/Projects";
import { CreateProject } from "../components/project/CreateProject/CreateProject";
import { Features } from "../components/feature/Features/Features";
import { Users } from "../components/user/Users/Users";
import { UserGroups } from "../components/userGroup/UserGroups/UserGroups";
import { Overview } from "../components/overview/Overview";
import { States } from "../components/state/States/States";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/create",
        element: <CreateProject />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/states",
        element: <States />,
      },
      {
        path: "/user-groups",
        element: <UserGroups />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
