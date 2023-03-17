import { useEffect, useState } from "react";

const useFeatureForm = (
  initialFeatureName = "",
  initialFeatureType = "Release",
  initialFeatureDesc = ""
) => {
  const [featureName, setFeatureName] = useState(initialFeatureName);
  const [featureType, setFeatureType] = useState(initialFeatureType);
  const [featureDesc, setFeatureDesc] = useState(initialFeatureDesc);
  const [errors, setErrors] = useState({});

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
      type: featureType,
      description: featureDesc,
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
    featureType,
    featureName,
    featureDesc,
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
