import React from "react";

import { ProjectsPageProps } from "./ProjectsPage.types";
import { PageLayout } from "../../components/common/PageLayout";
import { Section } from "../../components/main/Sidebar/Sidebar.types";
import { ProjectGrid } from "../../components/main/ProjectGrid";
import { SomeProjects } from "../../mocks";
import { Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const handleCreateClick = () => {
    alert("create project modal");
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
    </PageLayout>
  );
};
