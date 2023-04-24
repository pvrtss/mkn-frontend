import styled from "styled-components";
import { EditInputWrapProps } from "./EditInput.types";

export const EditInputWrap = styled.div<EditInputWrapProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: ${(props) => props.mt || "8px"};
`;
