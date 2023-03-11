import { FC } from "react";
import { PageContent } from "../../common/Page/PageContent/PageContent";
import { PageHeader } from "../../common/Page/PageHeader/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { ProjectList } from "../ProjectList/ProjectList";
import { Link } from "react-router-dom";

export const Projects: FC = () => {
  return (
    <PageContent
      isLoading={false}
      header={
        <PageHeader
          title={`Projects (1)`}
          actions={
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              component={Link}
              to={"/projects/create"}
            >
              Add Project
            </Button>
          }
        />
      }
    >
      <ProjectList />
    </PageContent>
  );
};
