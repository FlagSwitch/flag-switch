import React from "react";
import {
  StyledForm,
  StyledContainer,
  StyledDescription,
  styledSelectInput,
  StyledButton,
  StyledButtonContainer,
  StyledInput,
  StyledTextField,
} from "./FeatureForm.style";
import { useNavigate } from "react-router-dom";
import FeatureTypeSelect from "../common/FeatureTypeSelect/FeatureTypeSelect";
import FeatureProjectSelect from "../common/FeatureProjectSelect/FeatureProjectSelect";
import { FeatureTypeEnum } from "prisma-client";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { CF_TYPE_ID } from "utils/componentIds";
import { projectFeatureCreate } from "constants/routes/projectRoutes";
import { useTranslation } from "react-i18next";

interface IFeatureForm {
  projectId: string;
  featureName: string;
  featureType: FeatureTypeEnum;
  setFeatureType: React.Dispatch<React.SetStateAction<string>>;
  featureDesc: string;
  setFeatureName: React.Dispatch<React.SetStateAction<string>>;
  setFeatureDesc: React.Dispatch<React.SetStateAction<string>>;
  setProjectId: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: any) => void;
  handleCancel: () => void;
  errors: { [key: string]: string };
  mode: "Create" | "Edit";
  clearErrors: () => void;
  children?: React.ReactNode;
}

const FeatureForm: React.FC<IFeatureForm> = ({
  children,
  handleSubmit,
  handleCancel,
  projectId,
  setProjectId,
  featureName,
  featureType,
  setFeatureType,
  featureDesc,
  setFeatureName,
  setFeatureDesc,
  errors,
  clearErrors,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation(undefined, {
    keyPrefix: "features.featureForm",
  });
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContainer>
        <StyledDescription>{t("featureNameSelect")}</StyledDescription>
        <StyledInput
          label={t("placeholders.featureName")}
          value={featureName}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setFeatureName(e.target.value)}
          error={Boolean(errors.name)}
          errorText={errors.name}
          onFocus={() => clearErrors()}
          required
        />

        <StyledDescription>{t("featureTypeSelect")}</StyledDescription>
        <FeatureTypeSelect
          sx={styledSelectInput}
          value={featureType}
          onChange={setFeatureType as (key: string) => void}
          label={t("placeholders.featureType")}
          id="feature-type-select"
          editable
          data-testid={CF_TYPE_ID}
          IconComponent={KeyboardArrowDownOutlined}
        />

        <StyledDescription>{t("featureProjectSelect")}</StyledDescription>
        <FeatureProjectSelect
          enabled
          value={projectId}
          filter={() => true}
          onChange={(project) => {
            setProjectId(project);
            navigate(projectFeatureCreate(project), {
              replace: true,
            });
          }}
          sx={styledSelectInput}
        />

        <StyledDescription>{t("featureDescSelect")}</StyledDescription>
        <StyledTextField
          label={t("placeholders.featureDesc")}
          variant="outlined"
          multiline
          maxRows={4}
          value={featureDesc}
          onChange={(e) => setFeatureDesc(e.target.value)}
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

export default FeatureForm;
