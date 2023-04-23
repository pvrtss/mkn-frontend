import styled from "styled-components";
import { SmallCardSectionProps } from "./SmallNotficationCard.types";

export const SmallCardWrap = styled.div`
  background: #131313;
  height: 128px;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  user-select: none;
  :hover {
    border: 2px solid #90caf9;
  }
  :active {
    border: 2px solid #63b5f8;
  }
  border: 2px solid #131313;
  transition: 0.2s border;
`;

export const SmallCardTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export const SmallCardProject = styled.a`
  font-weight: 700;
  font-size: 12px;
  color: #838383;
  :link,
  :visited {
    text-decoration: none;
  }
  :hover,
  :active {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export const SmallCardSection = styled.a<SmallCardSectionProps>`
  font-weight: 400;
  font-size: 12px;
  :link,
  :visited {
    text-decoration: none;
  }
  :hover,
  :active {
    text-decoration: ${(props) => (props.delim ? "none" : "underline")};
  }
  cursor: ${(props) => (props.delim ? "default" : "pointer")};
  color: #838383;
`;

export const SmallCardInfo = styled.div`
  margin-top: 4px;
`;

export const ChipWrap = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: fit-content;
`;
