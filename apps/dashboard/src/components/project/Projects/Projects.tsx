import { FC } from "react";
import { PageContent } from "../../common/Page/PageContent/PageContent";
import { PageHeader } from "../../common/Page/PageHeader/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { ProjectList } from "../ProjectList/ProjectList";
import { Link } from "react-router-dom";
import { projectRoutes } from "constants/routes";
import { useTranslation } from "react-i18next";

export const Projects: FC = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: "projects",
  });
  return (
    <PageContent
      isLoading={false}
      header={
        <PageHeader
          title={`${t("header")} (1)`}
          actions={
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              component={Link}
              to={projectRoutes.projectsCreate}
            >
              {t("addProject")}
            </Button>
          }
        />
      }
    >
      <ProjectList />
    </PageContent>
  );
};
