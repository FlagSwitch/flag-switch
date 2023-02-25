import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Projects } from "../components/project/Projects/Projects";
import { Features } from "../components/feature/Features/Features";
import { Users } from "../components/user/Users/Users";
import { UserGroups } from "../components/userGroup/UserGroups/UserGroups";
import { Overview } from "../components/overview/Overview";

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
          path: "/features",
          element: <Features />,
        },
        {
          path: "/user-groups",
          element: <UserGroups />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ]
    },
]);

export default router;