import React from "react";

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
import { Chip, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { SectionDropdown } from "../../components/main/SectionDropdown";

export const ProjectPage: React.FC<ProjectPageProps> = () => {
  const navigate = useNavigate();
  const params = useParams();
  // TODO: remove mock
  const project =
    SomeProjects.find((p) => p.id === params.uuid) || SomeProjects[0];
  const handleCreateSectionClick = () => {
    alert("create section modal");
  };
  const handleSettingsClick = () => {
    navigate("settings");
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
    </PageLayout>
  );
};
