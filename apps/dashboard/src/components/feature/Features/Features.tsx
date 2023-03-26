import { FC } from "react";
import { PageContent } from "../../common/Page/PageContent/PageContent";
import { PageHeader } from "../../common/Page/PageHeader/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import FeatureTable from "../FeatureTable/FeatureTable";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectFeatureCreate } from "constants/routes/projectRoutes";
export const Features: FC = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: "features",
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
              to={projectFeatureCreate("default")}
            >
              {t("addFeature")}
            </Button>
          }
        />
      }
    >
      <FeatureTable />
    </PageContent>
  );
};
