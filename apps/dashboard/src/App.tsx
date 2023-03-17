import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "components/project/Projects/Projects";
import { CreateProject } from "components/project/CreateProject/CreateProject";
import { Features } from "components/feature/Features/Features";
import { CreateFeature } from "components/feature/CreateFeature/CreateFeature";
import { Users } from "components/user/Users/Users";
import { UserGroups } from "components/userGroup/UserGroups/UserGroups";
import { Overview } from "components/overview/Overview";
import { States } from "components/state/States/States";
import { LoginPage } from "components/login/LoginPage/LoginPage";
import { Frame } from "./Frame";
import PrivateRoutes from "components/router/PrivateRoutes";
import { useAuthUser } from "hooks/api/getters/useAuth/useAuthUser";
import { ConditionallyRender } from "components/common/ConditionallyRender/ConditionallyRender";
import { Loader } from "components/common/Loader/Loader";
function App() {
  const { isFetched } = useAuthUser();
  const hasFetchedAuth = isFetched;
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <ConditionallyRender
          condition={!hasFetchedAuth}
          show={<Loader />}
          elseShow={
            <Router>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route element={<Frame />}>
                    <Route element={<Overview />} path="/" />
                    <Route element={<Overview />} path="/overview" />
                    <Route element={<Projects />} path="/projects" />
                    <Route
                      element={<CreateProject />}
                      path="/projects/create"
                    />
                    <Route element={<Features />} path="/features" />
                    <Route
                      element={<CreateFeature />}
                      path="/features/create"
                    />
                    <Route element={<UserGroups />} path="/user-groups" />
                    <Route element={<States />} path="/states" />
                    <Route element={<Users />} path="/users" />
                  </Route>
                </Route>
                <Route element={<LoginPage />} path="/login" />
              </Routes>
            </Router>
          }
        />
      </Suspense>
    </div>
  );
}
export default App;
