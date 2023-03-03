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

export const StyledContainer = styled("div")(() => ({
  padding: "5px 10px",
  display: "flex",
  width: "100%",
}));

export const StyledLeftContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  gap: "15px",
}));

export const StyledRightContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
}));
