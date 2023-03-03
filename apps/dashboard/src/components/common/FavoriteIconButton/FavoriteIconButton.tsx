import { FC } from "react";
import { IconButton, IconButtonProps } from "@mui/material";
import { ConditionallyRender } from "../ConditionallyRender/ConditionallyRender";
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from "@mui/icons-material";

interface IFavoriteIconButtonProps extends IconButtonProps {
  isFavorite: boolean;
  size?: "medium" | "large";
}

export const FavoriteIconButton: FC<IFavoriteIconButtonProps> = ({
  isFavorite,
  size = "large",
  ...props
}) => {
  return (
    <IconButton size={size} data-loading {...props}>
      <ConditionallyRender
        condition={isFavorite}
        show={
          <StarIcon
            color="primary"
            sx={{
              fontSize: (theme) =>
                size === "medium" ? theme.spacing(2) : theme.spacing(3),
            }}
          />
        }
        elseShow={
          <StarBorderIcon
            sx={{
              fontSize: (theme) =>
                size === "medium" ? theme.spacing(2) : theme.spacing(3),
            }}
          />
        }
      />
    </IconButton>
  );
};
