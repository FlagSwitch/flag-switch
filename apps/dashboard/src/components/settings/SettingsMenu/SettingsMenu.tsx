import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Paper, Tab, Tabs } from "@mui/material";
import { useTranslation } from "react-i18next";
const navLinkStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  textDecoration: "none",
  color: "inherit",
  padding: "0.8rem 1.5rem",
};

const activeNavLinkStyle: React.CSSProperties = {
  fontWeight: "bold",
  borderRadius: "3px",
  padding: "0.8rem 1.5rem",
};

const createNavLinkStyle = (props: {
  isActive: boolean;
}): React.CSSProperties => {
  return props.isActive
    ? { ...navLinkStyle, ...activeNavLinkStyle }
    : navLinkStyle;
};

function SettingsMenu() {
  const { pathname } = useLocation();
  const { t } = useTranslation(undefined, {
    keyPrefix: "settings.settingsMenu",
  });
  return (
    <Paper
      style={{
        marginBottom: "1rem",
        borderRadius: "12.5px",
        boxShadow: "none",
      }}
    >
      <Tabs centered value={pathname}>
        <Tab
          value="/settings/environments"
          label={
            <NavLink to="/settings/environments" style={createNavLinkStyle}>
              <span>{t("enviroments")}</span>
            </NavLink>
          }
        />
      </Tabs>
    </Paper>
  );
}

export default SettingsMenu;
