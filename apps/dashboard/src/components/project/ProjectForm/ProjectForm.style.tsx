import { TextField, Button, styled } from "@mui/material";
import Input from "components/common/Input/Input";

export const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

export const StyledContainer = styled("div")(() => ({
  maxWidth: "400px",
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
  justifyContent: "flex-start",
}));

export const StyledButton = styled(Button)(() => ({}));
