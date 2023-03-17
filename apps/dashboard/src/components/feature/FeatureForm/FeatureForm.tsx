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

import FeatureTypeSelect from "../common/FeatureTypeSelect/FeatureTypeSelect";
import { FeatureTypeEnum } from "prisma-client";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { CF_TYPE_ID } from "utils/componentIds";

interface IFeatureForm {
  featureName: string;
  featureType: FeatureTypeEnum;
  setFeatureType: React.Dispatch<React.SetStateAction<FeatureTypeEnum>>;
  featureDesc: string;
  setFeatureName: React.Dispatch<React.SetStateAction<string>>;
  setFeatureDesc: React.Dispatch<React.SetStateAction<string>>;
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
  featureName,
  featureType,
  setFeatureType,
  featureDesc,
  setFeatureName,
  setFeatureDesc,
  errors,
  mode,
  clearErrors,
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContainer>
        <StyledDescription>What is your feature name?</StyledDescription>
        <StyledInput
          label="Feature name"
          value={featureName}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setFeatureName(e.target.value)}
          error={Boolean(errors.name)}
          errorText={errors.name}
          onFocus={() => clearErrors()}
          required
        />

        <StyledDescription>
          What kind of feature toggle do you want?
        </StyledDescription>
        <FeatureTypeSelect
          sx={styledSelectInput}
          value={featureType}
          onChange={setFeatureType as (key: string) => void}
          label={"Toggle type"}
          id="feature-type-select"
          editable
          data-testid={CF_TYPE_ID}
          IconComponent={KeyboardArrowDownOutlined}
        />

        <StyledDescription>Describe what your feature does?</StyledDescription>
        <StyledTextField
          label="Feature description"
          variant="outlined"
          multiline
          maxRows={4}
          value={featureDesc}
          onChange={(e) => setFeatureDesc(e.target.value)}
        />
      </StyledContainer>

      <StyledButtonContainer>
        {children}
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
      </StyledButtonContainer>
    </StyledForm>
  );
};

export default FeatureForm;
