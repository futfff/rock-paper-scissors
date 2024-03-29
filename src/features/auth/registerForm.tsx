import { NamePasswordForm } from "@/components/auth/namePasswordForm/namePasswordForm";
import { AuthStore } from "@/store/authStore";
import { FC } from "react";

export const RegisterForm: FC = () => {
  const registerFunc = AuthStore((state) => state.register);
  const error = AuthStore((state) => state.error);
  return (
    <NamePasswordForm
      nameError={error && error.type === "name" ? error._message : ""}
      passwordError={error && error.type === "password" ? error._message : ""}
      callBack={registerFunc}
    />
  );
};
