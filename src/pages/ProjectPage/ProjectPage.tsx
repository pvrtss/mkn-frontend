import React, { useEffect, useState } from "react";

import { ProjectPageProps } from "./ProjectPage.types";
import { PageLayout } from "../../components/common/PageLayout";
import {
  PageContent,
  PageContentHeader,
  PageTitle,
} from "../../components/common/PageLayout/PageLayout.style";
import { Section } from "../../components/main/Sidebar/Sidebar.types";
import { SectionsMock, SomeProjects } from "../../mocks";
import {
  NoSectionsWrap,
  ProjectButtons,
  SectionsWrap,
} from "./ProjectPage.style";
import { Chip, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { SectionDropdown } from "../../components/main/SectionDropdown";
import { Modal } from "../../components/common/Modal";
import { Inputs } from "../ProjectsPage/ProjectsPage.style";
import { TextFieldSx } from "../../components/common/TextField.styles";
import { ColorPicker } from "../../components/common/ColorPicker";

export const ProjectPage: React.FC<ProjectPageProps> = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [color, setColor] = useState<string>("#ffffff");
  const [title, setTitle] = useState<string>("");
  const [showAddSectionModal, setShowAddSectionModal] =
    useState<boolean>(false);

  // TODO: remove mock
  const project =
    SomeProjects.find((p) => p.id === params.uuid) || SomeProjects[0];
  const handleCreateSectionClick = () => {
    setShowAddSectionModal(true);
  };
  const handleSettingsClick = () => {
    navigate("settings");
  };
  const onCloseAddSection = () => {
    setShowAddSectionModal(false);
  };

  useEffect(() => {
    showAddSectionModal && (document.body.style.overflow = "hidden");
    !showAddSectionModal && (document.body.style.overflow = "unset");
  }, [showAddSectionModal]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleColorChange = (passedColor: any) => {
    setColor(passedColor);
    //alert(color);
  };

  const sections = SectionsMock;
  // const sections: any[] = [];

  return (
    <PageLayout sidebarSection={Section.None}>
      <PageContent>
        <PageContentHeader>
          <PageTitle>{project.title}</PageTitle>
          <ProjectButtons>
            <IconButton
              onClick={handleSettingsClick}
              color="default"
              aria-label="save"
            >
              <SettingsIcon />
            </IconButton>
            <Chip
              icon={<AddIcon />}
              label="СОЗДАТЬ СЕКЦИЮ"
              color="primary"
              onClick={handleCreateSectionClick}
            />
          </ProjectButtons>
        </PageContentHeader>
        <SectionsWrap>
          {sections.length ? (
            sections.map((s, key) => <SectionDropdown section={s} key={key} />)
          ) : (
            <NoSectionsWrap>Нет секций</NoSectionsWrap>
          )}
        </SectionsWrap>
      </PageContent>
      {showAddSectionModal && (
        <Modal
          title={"Создать секцию"}
          buttonLabel="СОЗДАТЬ"
          onClose={onCloseAddSection}
          onButtonClick={() => {
            alert("create section: " + title + " " + color);
            onCloseAddSection();
          }}
        >
          <Inputs>
            <TextField
              margin="none"
              sx={{ mt: "24px", ...TextFieldSx }}
              required
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              label="Название"
              autoFocus
            />
            <ColorPicker
              mt={"24px"}
              initialColor="#fff"
              onChange={handleColorChange}
              title="Выберите цвет"
            />
          </Inputs>
        </Modal>
      )}
    </PageLayout>
  );
};
