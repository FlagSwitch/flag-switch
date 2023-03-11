import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import purpleWhiteBackground from "assets/svg/wave1_white.svg";
import purpleBlackBackground from "assets/svg/wave1_black.svg";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadiusLarge,
  boxShadow: "none",
  backgroundImage: `url(${
    theme.type === "dark" ? purpleBlackBackground : purpleWhiteBackground
  })`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  padding: "30px",
  minHeight: "80vh",
}));
