import React from "react";
import { FourOFour, NoPageWrapper } from "./PageNotFound.style";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <NoPageWrapper>
      <FourOFour>404</FourOFour>
      <Button
        onClick={() => {
          navigate("/dashboard");
        }}
        variant="outlined"
      >
        На главную
      </Button>
    </NoPageWrapper>
  );
};
