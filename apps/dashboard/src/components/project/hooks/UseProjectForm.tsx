import { useEffect, useState } from "react";

const useProjectForm = (
  initialProjectId = "",
  initialProjectName = "",
  initialProjectDesc = ""
) => {
  const [projectId, setProjectId] = useState(initialProjectId);
  const [projectName, setProjectName] = useState(initialProjectName);
  const [projectDesc, setProjectDesc] = useState(initialProjectDesc);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setProjectId(initialProjectId);
  }, [initialProjectId]);

  useEffect(() => {
    setProjectName(initialProjectName);
  }, [initialProjectName]);

  useEffect(() => {
    setProjectDesc(initialProjectDesc);
  }, [initialProjectDesc]);

  const getProjectPayload = () => {
    return {
      id: projectId,
      name: projectName,
      description: projectDesc,
    };
  };

  const validateProjectId = async () => {
    if (projectId.length === 0) {
      setErrors((prev) => ({ ...prev, id: "Id can not be empty." }));
      return false;
    }
    try {
      return true;
    } catch (error: unknown) {
      setErrors((prev) => ({ ...prev }));
      return false;
    }
  };

  const validateName = () => {
    if (projectName.length === 0) {
      setErrors((prev) => ({ ...prev, name: "Name can not be empty." }));
      return false;
    }

    return true;
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    projectId,
    projectName,
    projectDesc,
    setProjectId,
    setProjectName,
    setProjectDesc,
    getProjectPayload,
    validateName,
    validateProjectId,
    clearErrors,
    errors,
  };
};

export default useProjectForm;
