import React from "react";
import { ButtonWrap, HomePageWrap, StyledLogo } from "./HomePage.style";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HomePageWrap>
      <StyledLogo></StyledLogo>
      <ButtonWrap>
        <Button
          onClick={() => {
            navigate("/login");
          }}
          variant="contained"
        >
          Войти
        </Button>
        <Button
          onClick={() => {
            navigate("/signup");
          }}
          variant="outlined"
        >
          Зарегистрироваться
        </Button>
      </ButtonWrap>
    </HomePageWrap>
  );
};
