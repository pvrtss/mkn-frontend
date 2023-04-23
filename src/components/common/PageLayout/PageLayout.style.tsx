import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../../assets/mkn-logo.svg";

export const PageWrap = styled.div`
  background: #0c0c0c;
  display: flex;
`;
export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const StyledLogo = styled(LogoSVG)`
  width: 100px;
  height: 100px;
`;

export const PageContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  width: 100%;
`;
