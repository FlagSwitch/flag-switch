import { FC } from "react";
import Box from "@mui/material/Box";
import {
  StyledForm,
  StyledContainer,
  StyledInput,
  StyledSmallLogo,
} from "./LoginForm.style";
import { trim } from "utils/utils";
import LoadingButton from "@mui/lab/LoadingButton";
import smallImageSrc from "assets/jpeg/flagSwitchSmall.jpeg";

interface ILoginForm {
  isLoading: boolean;
  usernameOrEmail: string;
  password: string;
  setUsernameOrEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: any) => void;
  errors: { [key: string]: string };
  clearErrors: () => void;
  children?: React.ReactNode;
}

export const LoginForm: FC<ILoginForm> = ({
  isLoading,
  usernameOrEmail,
  password,
  setUsernameOrEmail,
  setPassword,
  handleSubmit,
  errors,
  clearErrors,
}) => {
  return (
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
      <StyledForm onSubmit={handleSubmit}>
        <StyledContainer>
          <StyledSmallLogo src={smallImageSrc} />
        </StyledContainer>
        <StyledInput
          disabled={isLoading}
          label="Username or Email"
          value={usernameOrEmail}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setUsernameOrEmail(trim(e.target.value))}
          error={Boolean(errors.id)}
          errorText={errors.id}
          onFocus={() => clearErrors()}
          onBlur={() => {}}
          autoFocus
        />
        <StyledInput
          disabled={isLoading}
          label="Password"
          type="password"
          value={password}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setPassword(e.target.value)}
          error={Boolean(errors.name)}
          errorText={errors.name}
          onFocus={() => clearErrors()}
        />

        <LoadingButton
          loading={isLoading}
          loadingPosition="center"
          variant="contained"
          onClick={handleSubmit}
        >
          Sign In
        </LoadingButton>
      </StyledForm>
    </Box>
  );
};
