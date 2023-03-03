import { ReactNode, FC } from "react";
import classnames from "classnames";

import { SxProps, Theme, TypographyProps } from "@mui/material";
import { ConditionallyRender } from "../../../common/ConditionallyRender/ConditionallyRender";

import {
  StyledDivider,
  StyledHeader,
  StyledHeaderActions,
  StyledHeaderContainer,
  StyledHeaderTitle,
  StyledTopContainer,
} from "./PageHeader.style";
import { usePageTitle } from "../../../../hooks/usePageHeader";

interface IPageHeaderProps {
  title?: string;
  titleElement?: ReactNode;
  subtitle?: string;
  variant?: TypographyProps["variant"];
  loading?: boolean;
  actions?: ReactNode;
  className?: string;
  secondary?: boolean;
  children?: ReactNode;
}

const PageHeaderComponent: FC<IPageHeaderProps> & {
  Divider: typeof PageHeaderDivider;
} = ({
  title,
  titleElement,
  actions,
  subtitle,
  variant,
  loading,
  className = "",
  secondary,
  children,
}) => {
  const headerClasses = classnames({ skeleton: loading });

  usePageTitle(secondary ? "" : title);

  return (
    <StyledHeaderContainer>
      <StyledTopContainer>
        <StyledHeader className={classnames(headerClasses)} data-loading>
          <StyledHeaderTitle
            variant={variant || secondary ? "h2" : "h1"}
            className={classnames(className)}
          >
            {titleElement || title}
          </StyledHeaderTitle>
          {subtitle && <small>{subtitle}</small>}
        </StyledHeader>
        <ConditionallyRender
          condition={Boolean(actions)}
          show={<StyledHeaderActions>{actions}</StyledHeaderActions>}
        />
      </StyledTopContainer>
      {children}
    </StyledHeaderContainer>
  );
};

const PageHeaderDivider: FC<{ sx?: SxProps<Theme> }> = ({ sx }) => {
  return <StyledDivider orientation="vertical" variant="middle" sx={sx} />;
};

PageHeaderComponent.Divider = PageHeaderDivider;

export const PageHeader = PageHeaderComponent;
