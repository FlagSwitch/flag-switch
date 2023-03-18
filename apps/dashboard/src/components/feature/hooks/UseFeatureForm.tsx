import { useRequiredPathParam } from "hooks/useRequiredPathParam";
import { FeatureTypeEnum } from "prisma-client";
import { useEffect, useState } from "react";

const useFeatureForm = (
  initialFeatureName = "",
  initialProject = "Default",
  initialFeatureType = "Release",
  initialFeatureDesc = ""
) => {
  const projectId = useRequiredPathParam("projectId");
  const [featureName, setFeatureName] = useState(initialFeatureName);
  const [featureType, setFeatureType] = useState(initialFeatureType);
  const [featureDesc, setFeatureDesc] = useState(initialFeatureDesc);
  const [project, setProject] = useState(projectId || initialProject);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!projectId) setProject(initialProject);
    else setProject(projectId);
  }, [initialProject, projectId]);

  useEffect(() => {
    setFeatureName(initialFeatureName);
  }, [initialFeatureName]);

  useEffect(() => {
    setFeatureDesc(initialFeatureDesc);
  }, [initialFeatureDesc]);

  useEffect(() => {
    setFeatureType(initialFeatureType);
  }, [initialFeatureType]);

  const getFeaturePayload = () => {
    return {
      name: featureName,
      type: featureType as FeatureTypeEnum,
      description: featureDesc,
      projectId,
    };
  };

  const validateName = () => {
    if (featureName.length === 0) {
      setErrors((prev) => ({ ...prev, name: "Name can not be empty." }));
      return false;
    }

    return true;
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    project,
    featureType,
    featureName,
    featureDesc,
    setProject,
    setFeatureType,
    setFeatureName,
    setFeatureDesc,
    getFeaturePayload,
    validateName,
    clearErrors,
    errors,
  };
};

export default useFeatureForm;
