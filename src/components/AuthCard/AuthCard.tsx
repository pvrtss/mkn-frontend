import React, { useState } from "react";

import {
  AuthCardWrapper,
  HeaderText,
  HelperLink,
  HelperRow,
  HelperText,
} from "./AuthCard.style";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const TextFieldSx = {
  mt: "16px",
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#808080",
    },
    "&:hover fieldset": {
      borderColor: "#1975d2",
    },
  },
  "& label": {
    color: "#808080",
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
};

export const AuthCard = () => {
  const [login, setLogin] = useState<boolean>(true);

  const handleLoginSwitch = () => {
    setLogin((prev) => !prev);
  };

  return (
    <AuthCardWrapper>
      <HeaderText>{login ? "Войти" : "Регистрация"}</HeaderText>
      <HelperRow>
        <HelperText>{login ? "Нет аккаунта?" : "Уже есть аккаунт?"}</HelperText>
        <HelperLink onClick={handleLoginSwitch}>
          {login ? "Регистрация" : "Войти"}
        </HelperLink>
      </HelperRow>

      <TextField
        margin="none"
        sx={TextFieldSx}
        required={!login}
        fullWidth
        id="login"
        label="Логин"
        name="login"
        autoComplete="login"
        autoFocus
      />
      {!login && (
        <TextField
          margin="none"
          sx={TextFieldSx}
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
        />
      )}
      <TextField
        margin="none"
        sx={TextFieldSx}
        required={!login}
        fullWidth
        name="password"
        label="Пароль"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: "16px" }}>
        {login ? "Войти" : "Создать аккаунт"}
      </Button>
    </AuthCardWrapper>
  );
};
