import React, { FC } from "react";
import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { SidePanelContext } from "../../contexts/SidePanelContext";
import { useTheme } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import { Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { upperRoutes, userRoutes, middleRoutes, IRouteInfo } from "./routes";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import smallImageSrc from "../../assets/jpeg/flagSwitchSmall.jpeg";
import { StyledSmallLogo } from "./Sidebar.style";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Sidebar: FC = () => {
  const { open, setOpenSideNavbar } = useContext(SidePanelContext);
  const theme = useTheme();
  const { pathname } = useLocation();

  const handleDrawerClose = () => {
    setOpenSideNavbar(false);
  };

  const routesToNavListItems = (routes: Record<string, IRouteInfo>) => {
    return (
      <List>
        {Object.values(routes).map(({ displayName, icon, path }, index) => {
          return (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link}
                to={path}
                selected={path === pathname}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {React.createElement(icon)}
                </ListItemIcon>
                <ListItemText
                  primary={displayName}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <ListItemButton
          component="a"
          href="#customized-list"
          sx={{ gap: "10px" }}
        >
          <StyledSmallLogo show={!open} src={smallImageSrc} />
          <ListItemText
            sx={{ my: 0 }}
            primary="Flag Switch"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: "medium",
              letterSpacing: 0,
            }}
          />
        </ListItemButton>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {routesToNavListItems(upperRoutes)}
      <Divider />
      {routesToNavListItems(middleRoutes)}
      <Divider />
      {routesToNavListItems(userRoutes)}
    </Drawer>
  );
};
