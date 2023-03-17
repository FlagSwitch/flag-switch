import { FC } from "react";
import { FormPage } from "components/common/FormPage/FormPage";
import ProjectForm from "../ProjectForm/ProjectForm";
import useProjectForm from "../hooks/UseProjectForm";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAxios } from "contexts/AxiosContext";
import { Prisma } from "prisma-client";

export const CreateProject: FC = () => {
  const {
    projectId,
    projectName,
    projectDesc,
    setProjectId,
    setProjectName,
    setProjectDesc,
    getProjectPayload,
    clearErrors,
    validateProjectId,
    validateName,
    errors,
  } = useProjectForm();
  const axios = useAxios();
  const navigate = useNavigate();
  const mutation = useMutation((newProject: Prisma.ProjectCreateInput) => {
    return axios.post("http://localhost:3000/api/project", newProject);
  });

  const onCancel = () => {
    navigate("/projects");
  };

  const onSubmit = () => {
    const projectPayload = getProjectPayload();
    mutation.mutate(projectPayload, {
      onSuccess: () => navigate("/projects"),
    });
  };
  return (
    <FormPage>
      <ProjectForm
        errors={errors}
        handleSubmit={onSubmit}
        handleCancel={onCancel}
        projectId={projectId}
        setProjectId={setProjectId}
        projectName={projectName}
        setProjectName={setProjectName}
        projectDesc={projectDesc}
        setProjectDesc={setProjectDesc}
        mode="Create"
        clearErrors={clearErrors}
        validateProjectId={validateProjectId}
      />
    </FormPage>
  );
};
