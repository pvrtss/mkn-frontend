import React, { useState } from "react";

import { ProjectSettingsPageProps } from "./ProjectSettingsPage.types";
import { PageLayout } from "../../components/common/PageLayout";
import {
  PageContent,
  PageContentHeader,
  PageTitle,
} from "../../components/common/PageLayout/PageLayout.style";
import { Section } from "../../components/main/Sidebar/Sidebar.types";
import {
  CollaborantItem,
  ColumnSection,
  FooterButtonGroup,
  ProjectTitle,
  SettingsColumns,
  SettingsContent,
  SettingsFooter,
} from "./ProjectSettingsPage.style";
import { useNavigate, useParams } from "react-router-dom";
import { CollaborantsMock, SomeProjects } from "../../mocks";
import { EditInput } from "../../components/common/EditInput";
import { EditColorInput } from "../../components/common/EditColorInput";
import {
  MenuItem,
  Button,
  Menu,
  IconButton,
  Chip,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ds_Project, ds_User } from "../../api/generated";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "../../components/common/Modal";
import { Inputs } from "../ProjectsPage/ProjectsPage.style";
import { ColorPicker } from "../../components/common/ColorPicker";
import { TextFieldSx } from "../../components/common/TextField.styles";

export const ProjectSettingsPage: React.FC<ProjectSettingsPageProps> = () => {
  const params = useParams();
  const navigate = useNavigate();
  const project =
    SomeProjects.find((p) => p.id === params.uuid) || SomeProjects[0];

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showDeleteCollaborantModal, setShowDeleteCollaborantModal] =
    useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(
    project.title ? project.title : ""
  );
  const [newDescription, setNewDescription] = useState<string>(
    project.description ? project.description : ""
  );
  const [newColor, setNewColor] = useState<string>(
    project.color ? project.color : ""
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const collaborants = CollaborantsMock;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onSaveClick = () => {
    let new_items: string[] = [];
    let res = "";
    if (newTitle !== project.title) new_items.push(newTitle);
    if (newDescription !== project.description) new_items.push(newDescription);
    if (newColor !== project.color) new_items.push(newColor);
    for (const i of new_items) {
      res = res + i + "\n";
    }
    if (new_items.length) alert(res);
  };
  const handleDeleteClick = (e: React.MouseEvent, c: ds_User) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDeleteCollaborantModal(true);
  };
  const handleProjectTitleClick = () => {
    navigate("/projects/" + params.uuid);
  };
  const handleAddClick = () => {
    alert("add collaborant modal");
  };
  const handleProjectDelete = () => {
    setShowDeleteModal(true);
  };

  const handleSaveTitle = (title: string) => {
    if (project.title !== title) setNewTitle(title);
  };
  const handleSaveDescription = (description: string) => {
    if (project.description !== description) setNewDescription(description);
  };
  const handleSaveColor = (color: string) => {
    if (project.color !== color) setNewColor(color);
  };

  return (
    <PageLayout sidebarSection={Section.None}>
      <PageContent>
        <PageContentHeader>
          <PageTitle>
            Настройки
            <ProjectTitle onClick={handleProjectTitleClick}>
              {project.title}
            </ProjectTitle>
          </PageTitle>
        </PageContentHeader>
        <SettingsContent>
          <SettingsColumns>
            <ColumnSection>
              <EditInput
                onSave={handleSaveTitle}
                label="Название"
                defaultValue={project.title ? project.title : ""}
              />
              <EditInput
                onSave={handleSaveDescription}
                multiline
                label="Описание"
                defaultValue={project.description ? project.description : ""}
                mt="60px"
              />
              <EditColorInput
                mt="60px"
                initialColor={project.color ? project.color : "#fff"}
                onSave={handleSaveColor}
              />
            </ColumnSection>
            <ColumnSection>
              <Button
                id="dropdown-button"
                aria-controls={open ? "dropdown" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="outlined"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ width: "fit-content", ml: "20px" }}
              >
                Участники
              </Button>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: 400,
                  },
                }}
              >
                {collaborants.map((c, key) => (
                  <MenuItem key={key} selected={false} onClick={handleClose}>
                    <CollaborantItem>
                      {c.username + " (" + c.email + ")"}
                      <IconButton
                        onClick={(e) => {
                          handleDeleteClick(e, c);
                        }}
                        size="small"
                        color="error"
                        aria-label="delete"
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </CollaborantItem>
                  </MenuItem>
                ))}
              </Menu>
            </ColumnSection>
          </SettingsColumns>
          <SettingsFooter>
            <FooterButtonGroup>
              <Button
                onClick={handleProjectDelete}
                variant="outlined"
                color="error"
              >
                УДАЛИТЬ ПРОЕКТ
              </Button>
            </FooterButtonGroup>
            <FooterButtonGroup>
              <Chip
                icon={<AddIcon />}
                label="ДОБАВИТЬ УЧАСТНИКА"
                color="primary"
                size="medium"
                onClick={handleAddClick}
              />
              <Button variant="contained" onClick={onSaveClick}>
                СОХРАНИТЬ
              </Button>
            </FooterButtonGroup>
          </SettingsFooter>
        </SettingsContent>
      </PageContent>

      {showDeleteModal && (
        <Modal
          title="Удалить проект?"
          buttonLabel="ОК"
          onClose={() => {
            setShowDeleteModal(false);
          }}
          onButtonClick={() => {
            alert("project delete action");
          }}
        >
          <Button
            onClick={() => {
              setShowDeleteModal(false);
            }}
            variant="outlined"
            color="primary"
            sx={{ position: "absolute", bottom: "50px", left: "50px" }}
          >
            ОТМЕНА
          </Button>
        </Modal>
      )}
      {showDeleteCollaborantModal && (
        <Modal
          title="Удалить участника?"
          buttonLabel="ОК"
          onClose={() => {
            setShowDeleteCollaborantModal(false);
          }}
          onButtonClick={() => {
            alert("collaborant delete action");
          }}
        >
          <Button
            onClick={() => {
              setShowDeleteCollaborantModal(false);
            }}
            variant="outlined"
            color="primary"
            sx={{ position: "absolute", bottom: "50px", left: "50px" }}
          >
            ОТМЕНА
          </Button>
        </Modal>
      )}
    </PageLayout>
  );
};
