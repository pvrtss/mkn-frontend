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

export const PageLayout: React.FC<PropsWithChildren<PageLayoutProps>> = ({
  sidebarSection,
  children,
}) => {
  return (
    <PageWrap>
      <Sidebar selectedSection={sidebarSection} />
      <PageContentWrap>
        <PageHeader>
          <StyledLogo></StyledLogo>
        </PageHeader>
        {children}
      </PageContentWrap>
    </PageWrap>
  );
};
