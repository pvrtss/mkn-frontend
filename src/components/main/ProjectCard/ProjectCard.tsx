import React, { useState } from "react";

import { ProjectCardProps } from "./ProjectCard.types";
import {
  ColoredHat,
  FooterDivider,
  ProjectCardDate,
  ProjectCardDescription,
  ProjectCardFooter,
  ProjectCardInfo,
  ProjectCardInfoHeader,
  ProjectCardOwner,
  ProjectCardTitle,
  ProjectCardWrap,
} from "./ProjectCard.style";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";
import { boolean } from "zod";
import { useNavigate } from "react-router-dom";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  showDate,
  showStars,
  isFavourite,
}) => {
  // TODO: remove mock
  const currentUser = {
    id: "uuid1",
    username: "pvrts",
  };
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState<boolean>(
    isFavourite ? isFavourite : false
  );
  const handleStar = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`${favourite ? "unstar" : "star"} action`);
    setFavourite((p) => !p);
  };
  const handleProjectClick = () => {
    navigate("/projects/" + project.id);
  };

  return (
    <ProjectCardWrap
      color={project.color ? project.color : "#131313"}
      onClick={handleProjectClick}
    >
      <FooterDivider>
        <div>
          <ColoredHat color={project.color ? project.color : "#131313"} />
          <ProjectCardInfo>
            <ProjectCardInfoHeader>
              <ProjectCardTitle>{project.title}</ProjectCardTitle>

              {showStars && (
                <IconButton aria-label="star" onClick={(e) => handleStar(e)}>
                  <StarIcon color={favourite ? "primary" : "disabled"} />
                </IconButton>
              )}
            </ProjectCardInfoHeader>
            <ProjectCardDescription>
              {project.description}
            </ProjectCardDescription>
          </ProjectCardInfo>
        </div>
        <ProjectCardFooter>
          {showDate && <ProjectCardDate>{project.last_edited}</ProjectCardDate>}
          <ProjectCardOwner>
            {project.owner_id !== currentUser.id && (
              <ProjectCardOwner>{" / " + project.owner_id}</ProjectCardOwner>
            )}
          </ProjectCardOwner>
        </ProjectCardFooter>
      </FooterDivider>
    </ProjectCardWrap>
  );
};
