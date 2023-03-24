import { FC } from "react";
import { FormPage } from "components/common/FormPage/FormPage";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import FeatureForm from "../FeatureForm/FeatureForm";
import UseFeatureForm from "../hooks/UseFeatureForm";
import { useAxios } from "contexts/AxiosContext";
import { ICreateFeatureDto } from "dto-types";
import { FeatureTypeEnum } from "prisma-client";
import { useAuthUser } from "hooks/api/getters/useAuth/useAuthUser";

export const CreateFeature: FC = () => {
  const axios = useAxios();
  const { user } = useAuthUser();
  const navigate = useNavigate();
  const {
    project,
    featureType,
    featureName,
    featureDesc,
    setFeatureType,
    setFeatureDesc,
    setFeatureName,
    getFeaturePayload,
    clearErrors,
    setProject,
    errors,
  } = UseFeatureForm();
  const mutation = useMutation((newFeature: ICreateFeatureDto) => {
    return axios.post("http://localhost:3000/api/feature", newFeature);
  });

  const onSubmit = () => {
    const featurePayload = getFeaturePayload();
    mutation.mutate(
      {
        ...featurePayload,
        createdBy: user?.email || "",
      },
      {
        onSuccess: () => navigate("/features"),
      }
    );
  };

  const onCancel = () => {
    navigate("/features");
  };

  return (
    <FormPage>
      <FeatureForm
        errors={errors}
        handleSubmit={onSubmit}
        handleCancel={onCancel}
        featureName={featureName}
        setFeatureName={setFeatureName}
        featureDesc={featureDesc}
        featureType={featureType as FeatureTypeEnum}
        setFeatureType={setFeatureType}
        setFeatureDesc={setFeatureDesc}
        mode="Create"
        clearErrors={clearErrors}
        projectId={project}
        setProjectId={setProject}
      />
    </FormPage>
  );
};
