import React, { useState } from "react";

import { SectionDropdownProps } from "./SectionDropdown.types";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  ColoredCircle,
  NoNotification,
  NotificationGrid,
  SectionLeft,
  SectionRight,
  SectionTitle,
  SectionWrap,
} from "./SectionDropdown.style";
import { Chip, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NotificationsMock } from "../../../mocks";
import { NotificationCard } from "../NotificationCard";

export const SectionDropdown: React.FC<SectionDropdownProps> = ({
  section,
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const notifications = NotificationsMock.filter(
    (n) => n.section_id === section.id
  );

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert("edit section modal");
  };

  const handleCreateNotificationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert("create notification modal");
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert("delete alert");
  };

  return (
    <>
      <SectionWrap
        onClick={() => {
          setOpened((p) => !p);
        }}
      >
        <SectionLeft>
          {opened ? (
            <ExpandMoreIcon htmlColor="#626262" />
          ) : (
            <ChevronRightIcon htmlColor="#626262" />
          )}
          <ColoredCircle color={section.color} />
          <SectionTitle>{section.title}</SectionTitle>
        </SectionLeft>
        <SectionRight>
          {opened && notifications.length ? (
            <Chip
              icon={<AddIcon />}
              label="Создать напоминание"
              color="default"
              size="small"
              onClick={(e) => {
                handleCreateNotificationClick(e);
              }}
              sx={{ marginRight: "10px" }}
            />
          ) : (
            ""
          )}
          <IconButton
            onClick={(e) => {
              handleEditClick(e);
            }}
            color="default"
            size="small"
            aria-label="edit"
            sx={{ marginRight: "2px" }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={(e) => {
              handleDeleteClick(e);
            }}
            size="small"
            color="error"
            aria-label="delete"
            sx={{ marginRight: "6px" }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </SectionRight>
      </SectionWrap>
      {opened &&
        (notifications.length ? (
          <NotificationGrid>
            {notifications.map((n, key) => (
              <NotificationCard notification={n} key={key} />
            ))}
          </NotificationGrid>
        ) : (
          <NoNotification onClick={(e) => handleCreateNotificationClick(e)}>
            <AddIcon />
            Создать напоминание
          </NoNotification>
        ))}
    </>
  );
};
