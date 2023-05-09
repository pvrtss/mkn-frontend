import styled from "styled-components";
import { ColoredHatProps, ProjectCardWrapProps } from "./ProjectCard.types";

export const ProjectCardWrap = styled.div<ProjectCardWrapProps>`
  background: #131313;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  user-select: none;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  :hover {
    box-shadow: ${(props) => "0px 0px 8px 4px " + props.color + "20"};
  }
  max-height: 370px;
  transition: 0.2s box-shadow;
`;

export const ColoredHat = styled.div<ColoredHatProps>`
  background: ${(props) => props.color};
  width: 100%;
  border-radius: 12px 12px 0px 0px;
  height: 12px;
`;

export const ProjectCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 16px;
`;

export const ProjectCardInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectCardTitle = styled.span`
  font-size: 24px;
  text-overflow: ellipsis;
  max-width: 228px;
  overflow: hidden;
  white-space: nowrap;
`;

export const ProjectCardDescription = styled.p`
  margin-top: 32px;
  line-height: 20px;
  color: #b7b7b7;
  font-size: 14px;
`;

export const ProjectCardFooter = styled.div`
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProjectCardDate = styled.div`
  color: #90caf9;
`;

export const ProjectCardOwner = styled.span`
  color: #626262;
`;

export const FooterDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
