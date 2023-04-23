import React from "react";
import { SidebarProps, Section } from "./Sidebar.types";
import {
  SidebarButton,
  SidebarButtons,
  SidebarWrap,
  StyledFolderSVG,
  StyledHomeSVG,
  StyledSidebarStarSVG,
  StyledUserSVG,
} from "./Sidebar.style";
import { useNavigate } from "react-router-dom";
import { getSidebarSectionPath } from "../../../utils/getSidebarSectionPath";

export const Sidebar: React.FC<SidebarProps> = ({ selectedSection }) => {
  const navigate = useNavigate();

  const handleClick = (clickedSection: Section) => {
    if (selectedSection !== clickedSection) {
      alert(getSidebarSectionPath(clickedSection));
    }
  };

  return (
    <SidebarWrap>
      <SidebarButtons>
        <SidebarButton
          onClick={() => {
            handleClick(Section.Dashboard);
          }}
          isActive={selectedSection === Section.Dashboard}
        >
          <StyledHomeSVG />
          Главная
        </SidebarButton>
        <SidebarButton
          onClick={() => {
            handleClick(Section.Projects);
          }}
          isActive={selectedSection === Section.Projects}
        >
          <StyledFolderSVG />
          Проекты
        </SidebarButton>
        <SidebarButton
          onClick={() => {
            handleClick(Section.Favourites);
          }}
          isActive={selectedSection === Section.Favourites}
        >
          <StyledSidebarStarSVG />
          Избранное
        </SidebarButton>
        <SidebarButton
          onClick={() => {
            handleClick(Section.Profile);
          }}
          isActive={selectedSection === Section.Profile}
        >
          <StyledUserSVG />
          Профиль
        </SidebarButton>
      </SidebarButtons>
    </SidebarWrap>
  );
};
