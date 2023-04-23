import React from "react";

import { DashboardProps } from "./Dashboard.types";

import { Section } from "../../components/main/Sidebar/Sidebar.types";
import { PageLayout } from "../../components/common/PageLayout";
import { SmallNotficationCard } from "../../components/main/SmallNotficationCard";
import { SomeNotificationsMock } from "../../mocks";
import { UpcomingNotifications } from "../../components/main/UpcomingNotifications";

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <PageLayout sidebarSection={Section.Dashboard}>
      <UpcomingNotifications notifications={SomeNotificationsMock} />
    </PageLayout>
  );
};
