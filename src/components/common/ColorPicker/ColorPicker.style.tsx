import styled from "styled-components";
import { PickerContainerProps, PickerHelperProps } from "./ColorPicker.types";

export const PickerContainer = styled.div<PickerContainerProps>`
  margin-top: 8px;
  opacity: ${(props) => (props.opacity ? props.opacity : "1")};
`;

export const PickerHelper = styled.span<PickerHelperProps>`
  font-size: 14px;
  margin-top: ${(props) => props.marginTop || "8px"};
  color: #808080;
`;

export const PickerWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
