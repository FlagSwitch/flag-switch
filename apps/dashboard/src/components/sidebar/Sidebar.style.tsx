import { styled } from "@mui/material/styles";

interface StyledSmallLogoProps {
  show?: boolean;
}
export const StyledSmallLogo = styled("img")<StyledSmallLogoProps>(
  ({ show }) => ({
    width: "45px",
    minWidth: "45px",
    height: "45px",
    minHeight: "45px",
    bordeRadius: "8px",
    ...(show && { display: "none" }),
  })
);
