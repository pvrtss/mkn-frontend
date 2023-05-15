import React, { useState } from "react";

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
import { Chip, IconButton, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import RestoreIcon from "@mui/icons-material/Restore";
import { Modal } from "../../common/Modal";
import { title } from "process";
import { Inputs } from "../../../pages/ProjectsPage/ProjectsPage.style";
import { TextFieldSx } from "../../common/TextField.styles";
import { EditInput } from "../../common/EditInput";

export const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  const [showResendNotificationModal, setShowResendNotificationModal] =
    useState<boolean>(false);
  const [showEditNotificationModal, setShowEditNotificationModal] =
    useState<boolean>(false);
  const [showDeleteNotificationModal, setShowDeleteNotificationModal] =
    useState<boolean>(false);

  const [newTitle, setNewTitle] = useState<string>(
    notification.title ? notification.title : ""
  );
  const [newDescription, setNewDescription] = useState<string>(
    notification.description ? notification.description : ""
  );
  const [newDeadline, setDeadline] = useState<string>(
    notification.deadline ? notification.deadline : ""
  );

  const handleEditSubmit = () => {
    const new_items: string[] = [];
    let res = "";
    if (newTitle !== notification.title) new_items.push(newTitle);
    if (newDescription !== notification.description)
      new_items.push(newDescription);
    if (newDeadline !== notification.deadline) new_items.push(newDeadline);
    for (const i of new_items) {
      res = res + i + "\n";
    }
    if (new_items.length) alert(res);
  };
  const handleEditClick = (title: string) => {
    setNewTitle(title);
  };

  const onCloseEditModal = () => {
    setShowEditNotificationModal(false);
  };

  const handleDeleteClick = () => {
    alert("delete notifiaction alert");
  };

  const onCloseDeleteModal = () => {
    setShowDeleteNotificationModal(false);
  };

  const handleResendClick = () => {
    alert("resend notification modal");
  };

  const onCloseResendModal = () => {
    setShowResendNotificationModal(false);
  };
  return (
    <NotificationWrap>
      <div>
        <NotificationHeader>
          <NotificationTitle>{notification.title}</NotificationTitle>
          <NotificationHeaderButtons>
            {notification.status === "scheduled" && (
              <IconButton
                onClick={() => setShowEditNotificationModal(true)}
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
      {showEditNotificationModal && (
        <Modal
          title={"Редактировать напоминание"}
          buttonLabel="СОХРАНИТЬ"
          onClose={onCloseEditModal}
          onButtonClick={() => {
            handleEditSubmit();
            onCloseEditModal();
          }}
        >
          <Inputs>
            <EditInput
              onSave={(title: string) => setNewTitle(title)}
              label="Название"
              mt="32px"
              defaultValue={notification.title ? notification.title : ""}
            />
            <EditInput
              onSave={(desc: string) => setNewDescription(desc)}
              multiline
              label="Описание"
              defaultValue={
                notification.description ? notification.description : ""
              }
              mt="24px"
            />
          </Inputs>
        </Modal>
      )}
      {}
    </NotificationWrap>
  );
};
