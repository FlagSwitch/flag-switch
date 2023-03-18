import AnalyticsIcon from "@mui/icons-material/Analytics";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import FlagIcon from "@mui/icons-material/Flag";
import CommitIcon from "@mui/icons-material/Commit";
import i18n from "i18n/client";

export interface IRouteInfo {
  displayName: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}
export const upperRoutes = (): Record<string, IRouteInfo> => {
  return {
    overview: {
      displayName: i18n.t("sidePanel.navigationHeaders.overview"),
      path: "/overview",
      icon: AnalyticsIcon,
    },
    projects: {
      displayName: i18n.t("sidePanel.navigationHeaders.projects"),
      path: "/projects",
      icon: DashboardIcon,
    },
  };
};

export const middleRoutes = (): Record<string, IRouteInfo> => {
  return {
    features: {
      displayName: i18n.t("sidePanel.navigationHeaders.features"),
      path: "/features",
      icon: FlagIcon,
    },
    states: { displayName: "States", path: "/states", icon: CommitIcon },
  };
};

export const userRoutes = (): Record<string, IRouteInfo> => {
  return {
    users: {
      displayName: i18n.t("sidePanel.navigationHeaders.users"),
      path: "/users",
      icon: PersonSharpIcon,
    },
    userGroups: {
      displayName: i18n.t("sidePanel.navigationHeaders.userGroups"),
      path: "/user-groups",
      icon: GroupsSharpIcon,
    },
  };
};
