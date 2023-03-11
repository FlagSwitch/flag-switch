import React from "react";
import { IFlags, IUiConfig } from "interfaces/uiConfig";

export interface IRoute {
  path: string;
  title: string;
  type: "protected" | "unprotected";
  layout?: string;
  parent?: string;
  flag?: keyof IFlags;
  configFlag?: keyof IUiConfig;
  hidden?: boolean;
  enterprise?: boolean;
  isStandalone?: boolean;
  component: React.FunctionComponent;
}

export interface INavigationMenuItem {
  path: string;
  title: string;
  flag?: keyof IFlags;
  configFlag?: keyof IUiConfig;
}
