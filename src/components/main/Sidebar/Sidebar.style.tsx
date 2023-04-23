import styled from "styled-components";
import { ReactComponent as FolderSVG } from "../../../assets/folder.svg";
import { ReactComponent as HomeSVG } from "../../../assets/home.svg";
import { ReactComponent as SidebarStarSVG } from "../../../assets/sidebar-star.svg";
import { ReactComponent as UserSVG } from "../../../assets/user.svg";
import { SidebarButtonProps } from "./Sidebar.types";

export const SidebarWrap = styled.div`
  width: 300px;
  background: #131313;
  height: 100%;
  padding: 20px;
  position: fixed;
  box-sizing: border-box;
`;

export const SidebarButtons = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SidebarButton = styled.div<SidebarButtonProps>`
  background: ${(props) => (props.isActive ? "#515151" : "transparent")};
  display: flex;
  padding: 10px;
  border-radius: 8px;
  gap: 10px;
  font-weight: 700;
  font-size: 14px;
  align-items: center;
  cursor: ${(props) => (props.isActive ? "default" : "pointer")};
  :hover {
    background-color: #90caf9;
  }
  :active {
    background-color: #63b5f8;
  }
  transition: background-color 0.2s;
  user-select: none;
`;

export const StyledFolderSVG = styled(FolderSVG)`
  width: 20px;
  height: 20px;
`;

export const StyledHomeSVG = styled(HomeSVG)`
  width: 20px;
  height: 20px;
`;

export const StyledSidebarStarSVG = styled(SidebarStarSVG)`
  width: 20px;
  height: 20px;
`;

export const StyledUserSVG = styled(UserSVG)`
  width: 20px;
  height: 20px;
`;
