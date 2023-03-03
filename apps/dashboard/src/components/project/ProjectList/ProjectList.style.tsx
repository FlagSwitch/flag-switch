import { styled } from "@mui/material";

export const StyledDivContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));
