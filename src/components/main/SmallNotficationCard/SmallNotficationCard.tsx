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
import { getDeadlineString } from "../../../utils/getDeadlineString";

export const SmallNotficationCard: React.FC<SmallNotficationCardProps> = ({
  notification,
}) => {
  const onNotificationClick = () => {
    alert("link to id:" + notification.id);
  };
  const onSectionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert("link to section:" + notification.section_id);
  };
  const onProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert("link to to project of section:" + notification.section_id);
  };

  return (
    <SmallCardWrap onClick={onNotificationClick}>
      <SmallCardTitle>
        {notification.title ? notification.title : "Title"}
      </SmallCardTitle>
      <SmallCardInfo>
        <SmallCardProject onClick={(e) => onProjectClick(e)}>
          Project
        </SmallCardProject>
        <SmallCardSection delim>{" / "}</SmallCardSection>
        <SmallCardSection onClick={(e) => onSectionClick(e)}>
          {notification.section_id}
        </SmallCardSection>
      </SmallCardInfo>
      <ChipWrap>
        <Chip
          label={getDeadlineString(
            notification.deadline ? notification.deadline : "0"
          )}
          color="primary"
        />
      </ChipWrap>
    </SmallCardWrap>
  );
};
