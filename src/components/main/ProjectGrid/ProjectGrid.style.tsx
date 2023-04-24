import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

import { ProjectGridWrapProps } from "./ProjectGrid.types";
const fadeInAnimation = keyframes`${fadeIn}`;
export const ProjectGridWrap = styled.div<ProjectGridWrapProps>`
  padding: ${(props) =>
    props.paddingTop ? props.paddingTop + " 60px 60px 60px" : "60px"};
`;

export const ProjectGridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectGridTitle = styled.span`
  font-weight: 500;
  font-size: 32px;
`;

export const ProjectGridPlacer = styled.div`
  margin-top: 28px;
  display: grid;
  gap: 60px;
  grid-template-columns: 1fr 1fr 1fr;
  animation: 0.5s ${fadeInAnimation};
`;

export const EmptyProjectsStub = styled.div`
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
  font-size: 24px;
`;
