import { TextField, styled } from "@mui/material";
import Input from "components/common/Input/Input";

export const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

export const StyledContainer = styled("div")(({ theme }) => ({
  maxWidth: "400px",
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

export const StyledDescription = styled("p")(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const StyledInput = styled(Input)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(2),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(2),
}));

export const StyledButtonContainer = styled("div")(() => ({
  marginTop: "auto",
  display: "flex",
  flexDirection: "column",
}));

export const StyledSmallLogo = styled("img")(() => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
}));
