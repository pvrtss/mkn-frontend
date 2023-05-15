import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { OnTopProps } from "./Modal.types";

const fadeInAnimation = keyframes`${fadeIn}`;

export const ModalWrap = styled.div<OnTopProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.alwaysOnTop ? "2000" : "1000")};
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1.4px);
  animation: 0.2s ${fadeInAnimation};
`;

export const Fader = styled.div<OnTopProps>`
  background-color: #000000;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${(props) => (props.alwaysOnTop ? "1999" : "999")};
`;

export const ModalContent = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 895px;
  background: #131313;
  border-radius: 24px;
  padding: 50px;
  transition: backdrop-filter 0.2s;
  display: flex;
  flex-direction: column;
  min-height: 250px;
`;

export const ModalTitle = styled.span`
  font-weight: 500;
  font-size: 32px;
`;
