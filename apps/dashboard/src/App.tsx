import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "components/project/Projects/Projects";
import { CreateProject } from "components/project/CreateProject/CreateProject";
import { Features } from "components/feature/Features/Features";
import { Users } from "components/user/Users/Users";
import { UserGroups } from "components/userGroup/UserGroups/UserGroups";
import { Overview } from "components/overview/Overview";
import { States } from "components/state/States/States";
import { LoginPage } from "components/login/LoginPage/LoginPage";
import { Frame } from "./Frame";
import PrivateRoutes from "components/router/PrivateRoutes/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Frame />}>
              <Route element={<Overview />} path="/" />
              <Route element={<Overview />} path="/overview" />
              <Route element={<Projects />} path="/projects" />
              <Route element={<CreateProject />} path="/projects/create" />
              <Route element={<Features />} path="/features" />
              <Route element={<UserGroups />} path="/user-groups" />
              <Route element={<States />} path="/states" />
              <Route element={<Users />} path="/users" />
            </Route>
          </Route>
          <Route element={<LoginPage />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
