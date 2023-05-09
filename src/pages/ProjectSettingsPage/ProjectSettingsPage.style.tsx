import styled from "styled-components";

export const ProjectTitle = styled.span`
  font-weight: 400;
  color: #626262;
  cursor: pointer;
  margin-left: 12px;
`;

export const SettingsColumns = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const ColumnSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CollaborantItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  font-size: 16px;
`;

export const SettingsContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SettingsFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
