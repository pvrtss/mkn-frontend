import React from "react";

import { DashboardProps } from "./Dashboard.types";

import { Section } from "../../components/main/Sidebar/Sidebar.types";
import { PageLayout } from "../../components/common/PageLayout";

export const Dashboard: React.FC<DashboardProps> = () => {
  return <PageLayout sidebarSection={Section.Dashboard}></PageLayout>;
};
