import { FC } from "react";
import { PageContent } from "../../common/Page/PageContent/PageContent";
import { PageHeader } from "../../common/Page/PageHeader/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Environments: FC = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: "environments",
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
              to={"/settings/environments/create"}
            >
              {t("addEnv")}
            </Button>
          }
        />
      }
    ></PageContent>
  );
};
