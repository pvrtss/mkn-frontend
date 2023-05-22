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
import { Button, Chip, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import RestoreIcon from "@mui/icons-material/Restore";
import { Modal } from "../../common/Modal";
import { Inputs } from "../../../pages/ProjectsPage/ProjectsPage.style";
import { TextFieldSx } from "../../common/TextField.styles";
import { EditInput } from "../../common/EditInput";
import { EditDateTimePicker } from "../../common/EditDateTimePicker";
import { getDeadlineString } from "../../../utils/getDeadlineString";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { toast } from "react-toastify";

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
  const [newDeadline, setNewDeadline] = useState<string>(
    notification.deadline ? notification.deadline : ""
  );
  const [resendDeadline, setResendDeadline] = useState<Dayjs | null>(dayjs());

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
  const handleEditClick = () => {
    setShowEditNotificationModal(true);
  };

  const onCloseEditModal = () => {
    setShowEditNotificationModal(false);
  };

  const handleDeleteClick = () => {
    setShowDeleteNotificationModal(true);
  };

  const onCloseDeleteModal = () => {
    setShowDeleteNotificationModal(false);
  };

  const handleResendClick = () => {
    setShowResendNotificationModal(true);
  };

  const handleResendSubmit = () => {
    if (dayjs().isAfter(resendDeadline)) {
      toast.error("Дата и время должны быть позже текущего момента");
      return;
    }
    alert("resend fetch: " + resendDeadline);
    onCloseResendModal();
  };

  const handleDeleteSubmit = () => {
    alert("delete notification: " + notification.id);
    onCloseDeleteModal();
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
        <Chip
          label={getDeadlineString(
            notification.deadline ? notification.deadline : "0"
          )}
          color="primary"
        />
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
              onSave={(desc: string) => {
                setNewDescription(desc);
              }}
              multiline
              label="Описание"
              defaultValue={
                notification.description ? notification.description : ""
              }
              mt="24px"
            />
            <EditDateTimePicker
              onSave={(ts: string) => {
                setNewDeadline(ts);
              }}
              defaultValue={notification.deadline ? notification.deadline : ""}
              mt="24px"
            />
          </Inputs>
        </Modal>
      )}
      {showResendNotificationModal && (
        <Modal
          title={"Перезапланировать напоминание"}
          buttonLabel="СОХРАНИТЬ"
          onClose={onCloseResendModal}
          onButtonClick={() => {
            handleResendSubmit();
          }}
        >
          <Inputs>
            <DateTimePicker
              sx={{ ...TextFieldSx, mt: "24px" }}
              label="Дата и время отправки"
              value={resendDeadline}
              onChange={(ts) => setResendDeadline(ts)}
            />
          </Inputs>
        </Modal>
      )}
      {showDeleteNotificationModal && (
        <Modal
          title={"Удалить напоминание?"}
          buttonLabel="ОК"
          onClose={onCloseDeleteModal}
          onButtonClick={handleDeleteSubmit}
        >
          <Button
            onClick={() => {
              onCloseDeleteModal();
            }}
            variant="outlined"
            color="primary"
            sx={{ position: "absolute", bottom: "50px", left: "50px" }}
          >
            ОТМЕНА
          </Button>
        </Modal>
      )}
    </NotificationWrap>
  );
};
