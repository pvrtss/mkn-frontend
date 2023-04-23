import React from "react";

import { SmallNotficationCardProps } from "./SmallNotficationCard.types";
import {
  ChipWrap,
  SmallCardInfo,
  SmallCardProject,
  SmallCardSection,
  SmallCardTitle,
  SmallCardWrap,
} from "./SmallNotficationCard.style";
import { Chip } from "@mui/material";

export const SmallNotficationCard: React.FC<SmallNotficationCardProps> = ({
  notifcation,
}) => {
  const onNotificationClick = () => {
    alert("link to id:" + notifcation.id);
  };
  const onSectionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert("link to section:" + notifcation.section_id);
  };
  const onProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert("link to to project of section:" + notifcation.section_id);
  };

  return (
    <SmallCardWrap onClick={onNotificationClick}>
      <SmallCardTitle>
        {notifcation.title ? notifcation.title : "Title"}
      </SmallCardTitle>
      <SmallCardInfo>
        <SmallCardProject onClick={(e) => onProjectClick(e)}>
          Project
        </SmallCardProject>
        <SmallCardSection delim>{" / "}</SmallCardSection>
        <SmallCardSection onClick={(e) => onSectionClick(e)}>
          {notifcation.section_id}
        </SmallCardSection>
      </SmallCardInfo>
      <ChipWrap>
        <Chip label={notifcation.deadline} color="primary" />
      </ChipWrap>
    </SmallCardWrap>
  );
};
