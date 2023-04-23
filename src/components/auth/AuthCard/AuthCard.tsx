import {
  AuthCardWrapper,
  HeaderText,
  HelperLink,
  HelperRow,
  HelperText,
} from "./AuthCard.style";
import { Box, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { AuthCardTypes } from "./AuthCard.types";
import {
  LoginInput,
  RegisterInput,
  loginSchema,
  registerSchema,
} from "./schemas";
import { useNavigate } from "react-router-dom";

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
      borderColor: "#90caf9",
    },
  },
  "& label": {
    color: "#808080",
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
};

export const AuthCard: React.FC<AuthCardTypes> = ({ login }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = login
    ? useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
      })
    : useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
      });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput | LoginInput> = (
    values
  ) => {
    console.log(values);
    console.log(errors);
  };

  const handleLoginSwitch = () => {
    navigate(login ? "/signup" : "/login");
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
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <TextField
          margin="none"
          sx={TextFieldSx}
          required={!login}
          fullWidth
          id="username"
          label="Имя пользователя"
          autoComplete="login"
          autoFocus
          error={!!errors["username"]}
          helperText={errors["username"] ? errors["username"].message : ""}
          // eslint-disable-next-line
          {...register("username")}
        />
        {!login && (
          <TextField
            margin="none"
            sx={TextFieldSx}
            required
            fullWidth
            id="email"
            label="Email"
            autoComplete="email"
            type="email"
            error={!!errors["email"]}
            helperText={errors["email"] ? errors["email"].message : ""}
            {...register("email")}
          />
        )}
        <TextField
          margin="none"
          sx={TextFieldSx}
          required={!login}
          fullWidth
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
          error={!!errors["password"]}
          helperText={errors["password"] ? errors["password"].message : ""}
          {...register("password")}
        />
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          loading={loading}
          sx={{ mt: "16px" }}
        >
          {login ? "Войти" : "Создать аккаунт"}
        </LoadingButton>
      </Box>
    </AuthCardWrapper>
  );
};
