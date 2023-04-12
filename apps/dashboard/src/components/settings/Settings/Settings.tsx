import React from "react";
import SettingsMenu from "components/settings/SettingsMenu/SettingsMenu";
import { Outlet } from "react-router-dom";

function Settings() {
  return (
    <div>
      <SettingsMenu />
      <Outlet />
    </div>
  );
}

export default Settings;
