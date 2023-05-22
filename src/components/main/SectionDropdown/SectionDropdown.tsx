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
import { Button, Chip, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NotificationsMock } from "../../../mocks";
import { NotificationCard } from "../NotificationCard";
import { Modal } from "../../common/Modal";
import { Inputs } from "../../../pages/ProjectsPage/ProjectsPage.style";
import { EditInput } from "../../common/EditInput";
import { title } from "process";
import { TextFieldSx } from "../../common/TextField.styles";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { toast } from "react-toastify";
import { EditColorInput } from "../../common/EditColorInput";

export const SectionDropdown: React.FC<SectionDropdownProps> = ({
  section,
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const notifications = NotificationsMock.filter(
    (n) => n.section_id === section.id
  );

  const [showAddNotificationModal, setShowAddNotificationModal] =
    useState<boolean>(false);
  const [showEditSectionModal, setShowEditSectionModal] =
    useState<boolean>(false);
  const [showDeleteSectionModal, setShowDeleteSectionModal] =
    useState<boolean>(false);

  const [newTitle, setNewTitle] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<Dayjs | null>(dayjs());

  const [sectionColor, setSectionColor] = useState<string>("");
  const [sectionTitle, setSectionTitle] = useState<string>("");

  const onCloseModal = () => {
    setShowAddNotificationModal(false);
    setShowDeleteSectionModal(false);
    setShowEditSectionModal(false);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowEditSectionModal(true);
  };

  const handleEdit = () => {
    const new_items: string[] = [];
    let res = "";
    if (sectionTitle !== section.title) new_items.push(sectionTitle);
    if (sectionColor !== section.color) new_items.push(sectionColor);
    for (const i of new_items) {
      res = res + i + "\n";
    }
    if (new_items.length) alert(res);
    onCloseModal();
  };

  const handleCreateNotificationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAddNotificationModal(true);
  };

  const handleCreateNotification = () => {
    // TODO: check NaN deadline
    if (newTitle.trim() === "") {
      toast.error("Название не может быть пустым");
      return;
    }
    if (newTitle.length > 50) {
      toast.error("Название не может быть >50 символов");
      return;
    }
    if (newDescription.trim() === "") {
      toast.error("Описание не может быть пустым");
      return;
    }
    if (newDescription.length > 250) {
      toast.error("Описание не может быть >250 символов");
      return;
    }
    if (newDeadline === null || Number.isNaN(newDeadline.valueOf())) {
      toast.error("Ошибка заполнения даты");
      return;
    }
    if (dayjs().isAfter(newDeadline)) {
      toast.error("Дата и время должны быть позже текущего момента");
      return;
    }

    alert(
      "title: " +
        newTitle +
        "\n" +
        "desc: " +
        newDescription +
        "\n" +
        "deadline: " +
        newDeadline?.valueOf()
    );
    onCloseModal();
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDeleteSectionModal(true);
  };

  const handleDelete = () => {
    alert("delete section: " + section.id);
  };

  const handleSaveTitle = (value: string) => {
    setSectionTitle(value);
  };

  const handleSaveColor = (color: string) => {
    setSectionColor(color);
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
      {showAddNotificationModal && (
        <Modal
          title={"Создать напоминание"}
          buttonLabel="СОЗДАТЬ"
          onClose={onCloseModal}
          onButtonClick={() => {
            handleCreateNotification();
          }}
        >
          <Inputs>
            <TextField
              margin="none"
              sx={{ mt: "24px", ...TextFieldSx }}
              required
              fullWidth
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              id="title"
              label="Название"
              autoFocus
            />
            <TextField
              margin="none"
              sx={{ mt: "24px", ...TextFieldSx }}
              required
              fullWidth
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              id="description"
              label="Описание"
              autoFocus
              multiline
              rows={4}
            />
            <DateTimePicker
              sx={{ ...TextFieldSx, mt: "24px" }}
              label="Дата и время отправки"
              value={newDeadline}
              onChange={(ts) => setNewDeadline(ts)}
            />
          </Inputs>
        </Modal>
      )}
      {showEditSectionModal && (
        <Modal
          title={"Редактировать секцию"}
          buttonLabel="СОХРАНИТЬ"
          onClose={onCloseModal}
          onButtonClick={() => {
            handleEdit();
          }}
        >
          <Inputs>
            <EditInput
              onSave={handleSaveTitle}
              mt="32px"
              label="Название"
              defaultValue={section.title ? section.title : ""}
            />

            <EditColorInput
              mt="24px"
              initialColor={section.color ? section.color : "#fff"}
              onSave={handleSaveColor}
            />
          </Inputs>
        </Modal>
      )}
      {showDeleteSectionModal && (
        <Modal
          title={"Удалить секцию " + section.title + "?"}
          buttonLabel="ОК"
          onClose={onCloseModal}
          onButtonClick={handleDelete}
        >
          <Button
            onClick={() => {
              onCloseModal();
            }}
            variant="outlined"
            color="primary"
            sx={{ position: "absolute", bottom: "50px", left: "50px" }}
          >
            ОТМЕНА
          </Button>
        </Modal>
      )}
    </>
  );
};
