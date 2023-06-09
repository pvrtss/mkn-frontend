import React from "react";

import { Section } from "../../components/main/Sidebar/Sidebar.types";
import { PageLayout } from "../../components/common/PageLayout";
import { SomeNotificationsMock, SomeProjects } from "../../mocks";
import { UpcomingNotifications } from "../../components/main/UpcomingNotifications";
import { ProjectGrid } from "../../components/main/ProjectGrid";

export const Dashboard = () => {
  return (
    <PageLayout sidebarSection={Section.Dashboard}>
      <UpcomingNotifications notifications={SomeNotificationsMock} />
      <ProjectGrid title="Последние проекты" projects={SomeProjects} showDate />
    </PageLayout>
  );
};
