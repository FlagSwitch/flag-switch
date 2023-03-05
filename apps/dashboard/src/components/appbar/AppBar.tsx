import { FC, useContext } from "react";
import { SidePanelContext } from "../../contexts/SidePanelContext";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  StyledContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledSmallLogo,
} from "./Appbar.style";
import smallImageSrc from "../../assets/jpeg/flagSwitchSmall.jpeg";
import { DarkModeSwitch } from "components/common/switches/DarkModeSwitch/DarkModeSwitch";
import { Account } from "../account/Account";
import { useThemeMode } from "../../hooks/useThemeMode";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { LanguageMenu } from "../language/LanguageMenu/LanguageMenu";
const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.headerBackground,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
export const AppBar: FC = () => {
  const { open, setOpenSideNavbar } = useContext(SidePanelContext);
  const { onSetThemeMode, themeMode } = useThemeMode();

  const handleDrawerOpen = () => {
    setOpenSideNavbar(true);
  };
  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar disableGutters>
        <StyledContainer>
          <StyledLeftContainer>
            <StyledSmallLogo show={open} src={smallImageSrc} />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </StyledLeftContainer>
          <StyledRightContainer>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <LanguageMenu />
              <DarkModeSwitch
                checked={themeMode === "light"}
                handleChange={onSetThemeMode}
              />
              <Account />
            </Stack>
          </StyledRightContainer>
        </StyledContainer>
      </Toolbar>
    </StyledAppBar>
  );
};
