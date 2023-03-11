import { FC } from "react";
import { StyledPaper } from "./FormPage.style";

interface FormPagePros {
  children?: React.ReactNode;
}

export const FormPage: FC<FormPagePros> = ({ children }) => {
  return <StyledPaper>{children}</StyledPaper>;
};
