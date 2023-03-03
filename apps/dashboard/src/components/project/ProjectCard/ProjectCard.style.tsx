import { styled } from "@mui/material";
import Card from "@mui/material/Card";

export const StyledProjectCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  padding: theme.spacing(1, 2, 1, 2),
  width: "280px",
  height: "200px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: theme.spacing(1),
  boxShadow: "none",
  border: `1px solid ${theme.palette.tertiary.contrast}`,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
  "&:hover": {
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: theme.palette.projectCard.hover,
  },
  "&:active": {
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: theme.palette.projectCard.active,
  },
}));
