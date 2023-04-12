import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Projects } from "components/project/Projects/Projects";
import { CreateProject } from "components/project/CreateProject/CreateProject";
import { Features } from "components/feature/Features/Features";
import { CreateFeature } from "components/feature/CreateFeature/CreateFeature";
import { Users } from "components/user/Users/Users";
import { Environments } from "components/environment/Environment/Environment";
import Settings from "components/settings/Settings/Settings";
import { UserGroups } from "components/userGroup/UserGroups/UserGroups";
import { Overview } from "components/overview/Overview";
import { States } from "components/state/States/States";
import { LoginPage } from "components/login/LoginPage/LoginPage";
import { Frame } from "./Frame";
import PrivateRoutes from "components/router/PrivateRoutes";
import { useAuthUser } from "hooks/api/getters/useAuth/useAuthUser";
import { ConditionallyRender } from "components/common/ConditionallyRender/ConditionallyRender";
import { Loader } from "components/common/Loader/Loader";
import { useI18nSetup } from "i18n/useI18nSetup";
import {
  projectRoutes,
  featureRoutes,
  settingsRoutes,
  stateRoutes,
  userGroupsRoutes,
  userRoutes,
} from "constants/routes";
import "./themes/app.css";
function App() {
  const { isFetched } = useAuthUser();
  const isI18nReady = useI18nSetup();
  const hasFetchedAuth = isFetched;
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <ConditionallyRender
          condition={!hasFetchedAuth || !isI18nReady}
          show={<Loader />}
          elseShow={
            <Router>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route element={<Frame />}>
                    <Route element={<Overview />} path="/" />
                    <Route element={<Overview />} path="/overview" />
                    <Route
                      element={<Projects />}
                      path={projectRoutes.projectsBase}
                    />
                    <Route
                      element={<CreateProject />}
                      path={projectRoutes.projectsCreate}
                    />
                    <Route
                      element={<CreateFeature />}
                      path={projectRoutes.projectFeatureCreate(":projectId")}
                    />
                    <Route
                      element={<Features />}
                      path={featureRoutes.featuresBase}
                    />

                    <Route
                      element={<UserGroups />}
                      path={userGroupsRoutes.userGroupsBase}
                    />
                    <Route element={<States />} path={stateRoutes.stateBase} />
                    <Route element={<Users />} path={userRoutes.userBase} />
                    <Route
                      element={<Settings />}
                      path={settingsRoutes.settingsBase}
                    >
                      <Route
                        index
                        element={<Navigate to="environments" />}
                      ></Route>
                      <Route element={<Environments />} path="environments" />
                    </Route>
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
