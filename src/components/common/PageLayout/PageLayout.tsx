import React from "react";

import { PageLayoutProps } from "./PageLayout.types";
import {
  PageContentWrap,
  PageHeader,
  PageWrap,
  StyledLogo,
} from "./PageLayout.style";
import { Sidebar } from "../../main/Sidebar";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const PageLayout: React.FC<PropsWithChildren<PageLayoutProps>> = ({
  sidebarSection,
  children,
}) => {
  return (
    <PageWrap>
      <Sidebar selectedSection={sidebarSection} />
      <PageContentWrap>
        <PageHeader>
          <Link to="/dashboard">
            <StyledLogo></StyledLogo>
          </Link>
        </PageHeader>
        {children}
      </PageContentWrap>
    </PageWrap>
  );
};
