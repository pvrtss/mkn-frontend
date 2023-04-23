import React from "react";
import { AuthPageWrap, StyledLogo } from "./AuthPage.style";
import { AuthCard } from "../../components/auth/AuthCard";
import { AuthPageTypes } from "./AuthPage.types";

export const AuthPage: React.FC<AuthPageTypes> = ({ login }) => {
  return (
    <AuthPageWrap>
      <AuthCard login={login} />
      <StyledLogo />
    </AuthPageWrap>
  );
};
