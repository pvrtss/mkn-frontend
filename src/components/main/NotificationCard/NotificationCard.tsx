import React from "react";

import { NotificationCardProps } from "./NotificationCard.types";
import {
  NotificationDescription,
  NotificationFooter,
  NotificationHeader,
  NotificationHeaderButtons,
  NotificationStatusBar,
  NotificationTitle,
  NotificationWrap,
  StatusBarTitle,
} from "./NotificationCard.style";
import EditIcon from "@mui/icons-material/Edit";
import { Chip, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import RestoreIcon from "@mui/icons-material/Restore";

export const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  const handleEditClick = () => {
    alert("edit notification modal");
  };

  const handleDeleteClick = () => {
    alert("delete notifiaction alert");
  };

  const handleResendClick = () => {
    alert("resend notification modal");
  };
  return (
    <NotificationWrap>
      <div>
        <NotificationHeader>
          <NotificationTitle>{notification.title}</NotificationTitle>
          <NotificationHeaderButtons>
            {notification.status === "scheduled" && (
              <IconButton
                onClick={handleEditClick}
                color="default"
                size="small"
                aria-label="edit"
                sx={{ marginRight: "2px" }}
              >
                <EditIcon />
              </IconButton>
            )}
            {notification.status === "undelivered" && (
              <IconButton
                onClick={handleResendClick}
                color="default"
                size="small"
                aria-label="resend"
                sx={{ marginRight: "2px" }}
              >
                <RestoreIcon />
              </IconButton>
            )}
            <IconButton
              onClick={handleDeleteClick}
              size="small"
              color="error"
              aria-label="delete"
              sx={{ marginRight: "6px" }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </NotificationHeaderButtons>
        </NotificationHeader>
        <NotificationDescription>
          {notification.description}
        </NotificationDescription>
      </div>
      <NotificationFooter>
        <Chip label={notification.deadline} color="primary" />
        <NotificationStatusBar>
          {notification.status === "undelivered" ? (
            <ErrorIcon color="error" />
          ) : (
            <CheckCircleIcon
              color={
                notification.status === "delivered" ? "success" : "primary"
              }
            />
          )}

          <StatusBarTitle
            color={
              notification.status === "undelivered"
                ? "#F44336"
                : notification.status === "delivered"
                ? "#66BB6A"
                : "fff"
            }
          >
            {notification.status === "scheduled"
              ? "Запланировано"
              : notification.status === "delivered"
              ? "Доставлено"
              : "Не доставлено"}
          </StatusBarTitle>
        </NotificationStatusBar>
      </NotificationFooter>
    </NotificationWrap>
  );
};
