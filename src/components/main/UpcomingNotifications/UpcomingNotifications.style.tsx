import styled from "styled-components";

export const UCNotificationsList = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const UCNotificationsListWrap = styled.div`
  padding: 16px;
  width: 388px;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
  box-sizing: border-box;
  width: 100%;
`;

export const EmptyStub = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
  font-size: 18px;
`;
