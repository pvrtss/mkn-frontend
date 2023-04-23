import { object, string, TypeOf } from "zod";

export const registerSchema = object({
  username: string()
    .nonempty("Имя пользователя обязательно")
    .max(50, "Имя пользователя должно быть меньше 50"),
  email: string().nonempty("Email обязателен").email("Email неверный"),
  password: string()
    .nonempty("Пароль обязателен")
    .min(4, "Пароль должен содержать больше 3 символов")
    .max(32, "Пароль должен содержать меньше 32 символов"),
});

export const loginSchema = object({
  username: string()
    .nonempty("Имя пользователя обязательно")
    .max(50, "Имя пользователя должно быть меньше 50"),
  password: string()
    .nonempty("Пароль обязателен")
    .min(4, "Пароль должен содержать больше 3 символов")
    .max(32, "Пароль должен содержать меньше 32 символов"),
});

export type RegisterInput = TypeOf<typeof registerSchema>;
export type LoginInput = TypeOf<typeof loginSchema>;
