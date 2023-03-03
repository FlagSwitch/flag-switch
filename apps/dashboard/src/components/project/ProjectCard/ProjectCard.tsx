import React, { FC } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconCounter from "../../common/IconCounter/IconCounter";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { FavoriteIconButton } from "../../common/FavoriteIconButton/FavoriteIconButton";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import { StyledProjectCard } from "./ProjectCard.style";
import { ProjectWithRelationsCount } from "prisma-client";

export interface ProjectCardProps {
  project: ProjectWithRelationsCount;
}
export const ProjectCard: FC<ProjectCardProps> = ({
  project: {
    name,
    description,
    _count: { features, dashboardUsers },
  },
}) => {
  return (
    <StyledProjectCard>
      <CardHeader
        sx={{ padding: "5px" }}
        action={
          <>
            <FavoriteIconButton size="medium" isFavorite={true} />
            <IconButton size="small" aria-label="settings">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </>
        }
        avatar={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
        title={name}
      />
      <CardContent sx={{ padding: "0 15px", height: "50px" }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <AvatarGroup
          max={4}
          sx={{
            "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 15 },
          }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        </AvatarGroup>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <IconCounter icon={<HandymanOutlinedIcon />} count={100} />
          <IconCounter icon={<FlagOutlinedIcon />} count={features} />
          <IconCounter
            icon={<PersonOutlineOutlinedIcon />}
            count={dashboardUsers}
          />
        </div>
      </CardActions>
    </StyledProjectCard>
  );
};
