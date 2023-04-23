import styled from "styled-components";

export const AuthCardWrapper = styled.div`
  width: 420px;
  @media (max-width: 620px) {
    width: 80vw;
    padding: 24px;
  }
  padding: 58px;
  background: #131313;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #131313 inset !important;
    -webkit-text-fill-color: white !important;
  }
`;

export const HeaderText = styled.span`
  font-size: 34px;
`;

export const HelperText = styled.span`
  font-size: 16px;
`;

export const HelperLink = styled.a`
  font-size: 16px;
  margin-left: 4px;
  @media (max-width: 430px) {
    margin-left: 0px;
    margin-top: 4px;
  }
  color: #1975d2;
  cursor: pointer;
  :link,
  :visited {
    text-decoration: none;
  }
  :hover,
  :active {
    text-decoration: underline;
  }
`;

export const HelperRow = styled.div`
  display: flex;
  margin-top: 16px;
  @media (max-width: 430px) {
    flex-direction: column;
  }
`;
