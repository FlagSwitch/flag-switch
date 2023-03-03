import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const StyledHeader = styled("div")(({ theme }) => ({
  padding: theme.spacing(2, 4),
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  borderBottomColor: theme.palette.divider,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3, 2),
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadiusLarge,
  boxShadow: "none",
}));

export const StyledBody = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  overflowX: "auto",
}));
