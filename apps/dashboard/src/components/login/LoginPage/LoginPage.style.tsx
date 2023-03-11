import { styled } from "@mui/material";
import loginPageBackground from "assets/svg/login_page.svg";
export const StyledLoginPage = styled("div")(() => ({
  height: "100vh",
  backgroundImage: `url(${loginPageBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
}));
