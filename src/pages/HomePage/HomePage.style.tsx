import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/mkn-logo.svg";

export const HomePageWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c0c0c;
  position: relative;
  font-size: 50px;
  overflow: hidden;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledLogo = styled(LogoSVG)`
  position: absolute;
  width: 80vw;
  transform: translateX(-25%);
`;
