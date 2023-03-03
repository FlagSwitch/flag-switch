import { FC } from "react";
import { PageContent } from "../../common/Page/PageContent/PageContent";
import { PageHeader } from "../../common/Page/PageHeader/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export const UserGroups: FC = () => {
  return (
    <PageContent
      isLoading={false}
      header={
        <PageHeader
          title={`User Groups (1)`}
          actions={
            <Button variant="contained" startIcon={<AddIcon />}>
              Add Group
            </Button>
          }
        />
      }
    ></PageContent>
  );
};
