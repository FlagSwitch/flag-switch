import { FC, useEffect } from "react";

import { StyledLoginPage } from "./LoginPage.style";
import { LoginForm } from "../LoginForm/LoginForm";
import useLoginForm from "../hooks/UseLoginForm";
import { useAuthApi } from "hooks/api/actions/useAuthApi/useAuthApi";
import { useAuthUser } from "hooks/api/getters/useAuth/useAuthUser";
import { useNavigate } from "react-router";
import { overviewRoutes } from "constants/routes";
import { useQueryClient } from "@tanstack/react-query";
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
  const { loading: loginLoading, login } = useAuthApi();
  const { user, loading: userLoading } = useAuthUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (user?.id) {
      navigate(overviewRoutes.overviewBase);
    }
  }, [user, navigate]);

  const onSignInClicked = () => {
    const { usernameOrEmail, password } = getLoginPayload();
    login({ email: usernameOrEmail, password }).then(({ token }) => {
      localStorage.setItem("token", token);
      queryClient.invalidateQueries(["authData"]);
    });
  };

  return (
    <StyledLoginPage>
      <LoginForm
        isLoading={loginLoading || userLoading}
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
