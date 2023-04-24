import React, { useState } from "react";

import { PageLayout } from "../../components/common/PageLayout";
import { Section } from "../../components/main/Sidebar/Sidebar.types";
import { ProjectGrid } from "../../components/main/ProjectGrid";
import { SomeProjects } from "../../mocks";
import { Chip, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "../../components/common/Modal";
import { TextFieldSx } from "../../components/common/TextField.styles";
import { SliderPicker } from "react-color";
import { Inputs, PickerContainer, PickerHelper } from "./ProjectsPage.style";

export const ProjectsPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [color, setColor] = useState<string>("#ffffff");

  const handleCreateClick = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleColorChange = (passedColor: any) => {
    setColor(passedColor.hex);
    //alert(color);
  };

  return (
    <PageLayout sidebarSection={Section.Projects}>
      <ProjectGrid
        paddingTop="12px"
        showStars
        title="Проекты"
        projects={SomeProjects}
      >
        <Chip
          icon={<AddIcon />}
          label="СОЗДАТЬ"
          color="primary"
          onClick={handleCreateClick}
        />
      </ProjectGrid>
      {showModal && (
        <Modal
          title="Создать проект"
          buttonLabel="СОЗДАТЬ"
          onClose={onCloseModal}
        >
          <Inputs>
            <TextField
              margin="none"
              sx={{ mt: "24px", ...TextFieldSx }}
              required
              fullWidth
              id="name"
              label="Название"
              autoFocus
            />
            <TextField
              margin="none"
              sx={{ mt: "24px", ...TextFieldSx }}
              required
              fullWidth
              id="description"
              label="Описание"
              autoFocus
              multiline
              rows={4}
            />
            <PickerHelper marginTop="24px">Выберите цвет:</PickerHelper>
            <PickerContainer>
              <SliderPicker color={color} onChange={handleColorChange} />
            </PickerContainer>
            <PickerHelper>{color}</PickerHelper>
          </Inputs>
        </Modal>
      )}
    </PageLayout>
  );
};
