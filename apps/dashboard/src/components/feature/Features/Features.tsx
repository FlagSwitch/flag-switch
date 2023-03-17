import { FC } from "react";
import { PageContent } from "../../common/Page/PageContent/PageContent";
import { PageHeader } from "../../common/Page/PageHeader/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import FeatureTable from "../FeatureTable/FeatureTable";
import { Link } from "react-router-dom";

export const Features: FC = () => {
  return (
    <PageContent
      isLoading={false}
      header={
        <PageHeader
          title={`Features (1)`}
          actions={
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              component={Link}
              to={"/features/create"}
            >
              Add Feature
            </Button>
          }
        />
      }
    >
      <FeatureTable />
    </PageContent>
  );
};
