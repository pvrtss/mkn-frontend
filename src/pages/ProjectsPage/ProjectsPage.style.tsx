import styled from "styled-components";
import { PickerHelperProps } from "./ProjectsPage.types";

export const Inputs = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const PickerContainer = styled.div`
  margin-top: 8px;
`;

export const PickerHelper = styled.span<PickerHelperProps>`
  font-size: 14px;
  margin-top: ${(props) => props.marginTop || "8px"};
  color: #808080;
`;
