import styled, { keyframes } from "styled-components";
import { ColoredCircleProps } from "./SectionDropdown.types";
import { fadeIn } from "react-animations";
const fadeInAnimation = keyframes`${fadeIn}`;

export const SectionWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-radius: 8px;
  background: #131313;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  user-select: none;
  :hover {
    border: 2px solid #90caf9;
  }
  :active {
    border: 2px solid #63b5f8;
  }
  border: 2px solid #131313;
  transition: 0.2s border;
  cursor: pointer;
`;

export const SectionLeft = styled.div`
  margin-left: 4px;
  display: flex;
  align-items: center;
`;

export const SectionTitle = styled.span`
  margin-left: 12px;
  font-size: 14px;
  font-weight: bold;
`;

export const SectionRight = styled.div`
  display: flex;
  align-items: center;
`;

export const ColoredCircle = styled.div<ColoredCircleProps>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-left: 4px;
  background: ${(props) => (props.color ? props.color : "#626262")};
`;

export const NotificationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  animation: 0.3s ${fadeInAnimation};
`;

export const NoNotification = styled.div`
  height: 100px;
  border-radius: 10px;
  color: #626262;
  background: transparent;
  :hover {
    background: #131313;
  }
  :active {
    background: #626262;
    color: white;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  gap: 8px;
  animation: 0.3s ${fadeInAnimation};
`;
