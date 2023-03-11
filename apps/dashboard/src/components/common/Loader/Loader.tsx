import { FC } from "react";
import Box from "@mui/material/Box";
import { StyledLoaderPage } from "./Loader.style";
import Spinner from "components/common/Spinner/Spinner";
export const Loader: FC = () => {
  return (
    <StyledLoaderPage>
      <Box
        sx={{
          padding: "56px 48px",
          borderRadius: "20px",
          backgroundColor: "white",
          boxShadow: 3,
          marginTop: "-200px",
          marginLeft: "-250px",
          width: "500px",
          height: "400px",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <Spinner />
      </Box>
    </StyledLoaderPage>
  );
};
