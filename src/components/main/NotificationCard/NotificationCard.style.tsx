import styled from "styled-components";
import { StatusBarTitleProps } from "./NotificationCard.types";

export const NotificationWrap = styled.div`
  background: #131313;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  max-height: 200px;
  padding: 22px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NotificationHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const NotificationTitle = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const NotificationDescription = styled.p`
  color: #838383;
  max-height: 90px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const NotificationStatusBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatusBarTitle = styled.div<StatusBarTitleProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

export const NotificationFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
