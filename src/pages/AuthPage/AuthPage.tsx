import React from "react";
import { AuthPageWrap, StyledLogo } from "./AuthPage.style";
import { AuthCard } from "../../components/AuthCard";

export const AuthPage = () => {
  return (
    <AuthPageWrap>
      <AuthCard />
      <StyledLogo />
    </AuthPageWrap>
  );
};
