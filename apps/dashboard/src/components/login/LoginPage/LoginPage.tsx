import { FC, useState } from "react";

import { StyledLoginPage } from "./LoginPage.style";
import { LoginForm } from "../LoginForm/LoginForm";
import useLoginForm from "../hooks/UseLoginForm";
export const LoginPage: FC = () => {
  const {
    usernameOrEmail,
    password,
    setUsernameOrEmail,
    setPassword,
    getLoginPayload,
    clearErrors,
    errors,
  } = useLoginForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSignInClicked = () => {
    setIsLoading(!isLoading);
  };

  return (
    <StyledLoginPage>
      <LoginForm
        isLoading={isLoading}
        errors={errors}
        handleSubmit={onSignInClicked}
        usernameOrEmail={usernameOrEmail}
        setUsernameOrEmail={setUsernameOrEmail}
        password={password}
        setPassword={setPassword}
        clearErrors={clearErrors}
      />
    </StyledLoginPage>
  );
};
