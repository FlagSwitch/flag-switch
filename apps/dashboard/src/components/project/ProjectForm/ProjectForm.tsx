import React from "react";
import {
  StyledForm,
  StyledContainer,
  StyledDescription,
  StyledInput,
  StyledTextField,
  StyledButtonContainer,
  StyledButton,
} from "./ProjectForm.style";
import { trim } from "utils/utils";
import { useTranslation } from "react-i18next";

interface IProjectForm {
  projectId: string;
  projectName: string;
  projectDesc: string;
  setProjectId: React.Dispatch<React.SetStateAction<string>>;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  setProjectDesc: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: any) => void;
  handleCancel: () => void;
  errors: { [key: string]: string };
  mode: "Create" | "Edit";
  clearErrors: () => void;
  validateProjectId: () => void;
  children?: React.ReactNode;
}

const ProjectForm: React.FC<IProjectForm> = ({
  children,
  handleSubmit,
  handleCancel,
  projectId,
  projectName,
  projectDesc,
  setProjectId,
  setProjectName,
  setProjectDesc,
  errors,
  mode,
  validateProjectId,
  clearErrors,
}) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: "projects.projectForm",
  });
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContainer>
        <StyledDescription>{t("projectIdSelect")}</StyledDescription>
        <StyledInput
          label="Project Id"
          value={projectId}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setProjectId(trim(e.target.value))}
          error={Boolean(errors.id)}
          errorText={errors.id}
          onFocus={() => clearErrors()}
          onBlur={validateProjectId}
          disabled={mode === "Edit"}
          autoFocus
          required
        />

        <StyledDescription>{t("projectNameSelect")}</StyledDescription>
        <StyledInput
          label="Project name"
          value={projectName}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setProjectName(e.target.value)}
          error={Boolean(errors.name)}
          errorText={errors.name}
          onFocus={() => clearErrors()}
          required
        />

        <StyledDescription>{t("projectDescSelect")}</StyledDescription>
        <StyledTextField
          label="Project description"
          variant="outlined"
          multiline
          maxRows={4}
          value={projectDesc}
          onChange={(e) => setProjectDesc(e.target.value)}
        />
      </StyledContainer>

      <StyledButtonContainer>
        {children}
        <StyledButton variant="contained" onClick={handleSubmit}>
          {t("buttons.submit")}
        </StyledButton>
        <StyledButton onClick={handleCancel}>
          {t("buttons.cancel")}
        </StyledButton>
      </StyledButtonContainer>
    </StyledForm>
  );
};

export default ProjectForm;
