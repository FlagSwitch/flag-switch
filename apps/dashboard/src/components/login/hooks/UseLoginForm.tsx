import { useEffect, useState } from "react";

const useLoginForm = (initialUsernameOrEmail = "", initialPassword = "") => {
  const [usernameOrEmail, setUsernameOrEmail] = useState(
    initialUsernameOrEmail
  );
  const [password, setPassword] = useState(initialPassword);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUsernameOrEmail(initialUsernameOrEmail);
  }, [initialUsernameOrEmail]);

  useEffect(() => {
    setPassword(password);
  }, [password]);

  const getLoginPayload = () => {
    return {
      usernameOrEmail,
      password,
    };
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    usernameOrEmail,
    password,
    getLoginPayload,
    setUsernameOrEmail,
    setPassword,
    clearErrors,
    errors,
  };
};

export default useLoginForm;
