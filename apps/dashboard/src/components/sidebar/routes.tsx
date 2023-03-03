import AnalyticsIcon from "@mui/icons-material/Analytics";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import FlagIcon from "@mui/icons-material/Flag";
import CommitIcon from "@mui/icons-material/Commit";

export interface IRouteInfo {
  displayName: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}
export const upperRoutes: Record<string, IRouteInfo> = {
  overview: { displayName: "Overview", path: "/overview", icon: AnalyticsIcon },
  projects: { displayName: "Projects", path: "/projects", icon: DashboardIcon },
};

export const middleRoutes: Record<string, IRouteInfo> = {
  features: { displayName: "Features", path: "/features", icon: FlagIcon },
  states: { displayName: "States", path: "/states", icon: CommitIcon },
};

export const userRoutes: Record<string, IRouteInfo> = {
  users: { displayName: "Users", path: "/users", icon: PersonSharpIcon },
  userGroups: {
    displayName: "User Groups",
    path: "/user-groups",
    icon: GroupsSharpIcon,
  },
};
