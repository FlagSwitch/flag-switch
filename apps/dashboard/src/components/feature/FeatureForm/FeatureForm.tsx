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

        <StyledDescription>
          In which project do you want to save the toggle?
        </StyledDescription>
        <FeatureProjectSelect
          enabled
          value={projectId}
          filter={() => true}
          onChange={(project) => {
            debugger;
            setProjectId(project);
            navigate(`/projects/${project}/feature-create`, {
              replace: true,
            });
          }}
          sx={styledSelectInput}
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
        <StyledButton variant="contained" onClick={handleSubmit}>
          Submit
        </StyledButton>
        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
      </StyledButtonContainer>
    </StyledForm>
  );
};

export default FeatureForm;
