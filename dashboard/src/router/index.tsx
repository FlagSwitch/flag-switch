import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Projects } from "../components/project/Projects/Projects";
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
      ]
    },
]);

export default router;