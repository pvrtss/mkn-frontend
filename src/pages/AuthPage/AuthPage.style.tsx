import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/mkn-logo.svg";

export const AuthPageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c0c0c;
  position: relative;
  height: 100%;
`;

export const StyledLogo = styled(LogoSVG)`
  position: absolute;
  width: 100px;
  height: 100px;
  @media (max-width: 620px) {
    top: 50px;
    left: 50%;

    transform: translate(-50%, 0);
  }
  top: 50px;
  left: 50px;
`;
