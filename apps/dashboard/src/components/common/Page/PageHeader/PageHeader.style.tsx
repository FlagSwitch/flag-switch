import { styled } from "@mui/material/styles";
import { Divider, Typography } from "@mui/material";

export const StyledDivider = styled(Divider)(({ theme }) => ({
  height: "100%",
  borderColor: theme.palette.dividerAlternative,
  width: "1px",
  display: "inline-block",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  padding: "10px 0",
  verticalAlign: "middle",
}));

export const StyledHeaderContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledTopContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
}));

export const StyledHeader = styled("div")(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  marginRight: theme.spacing(2),
}));

export const StyledHeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.fontSizes.mainHeader,
  fontWeight: "normal",
}));

export const StyledHeaderActions = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  gap: theme.spacing(1),
}));
