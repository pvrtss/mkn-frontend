import React from "react";

import { PageLayout } from "../../components/common/PageLayout";
import { ProjectGrid } from "../../components/main/ProjectGrid";
import { Section } from "../../components/main/Sidebar/Sidebar.types";
import { SomeFavouriteProjects } from "../../mocks";

export const FavouritesPage = () => {
  return (
    <PageLayout sidebarSection={Section.Favourites}>
      <ProjectGrid
        paddingTop="12px"
        showStars
        title="Избранные проекты"
        projects={SomeFavouriteProjects}
      />
    </PageLayout>
  );
};
