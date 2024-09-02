"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { ILoginData } from "types/login.type";
import z from "zod";

import { useAuth } from "@hooks/useAuth";

import Input from "@components/FormInput";

const loginFormScheme = z.object({
  username: z.string().min(1, "Please enter a valid username"),
  password: z
    .string()
    .min(8, "The password must contain at least 8 characters"),
});

type LoginFormProps = {
  onClose?: () => void;
};

const LoginForm = React.forwardRef<HTMLFormElement, LoginFormProps>(
  ({ onClose }, ref) => {
    const { handleSubmit, register, formState } = useForm<
      z.infer<typeof loginFormScheme>
    >({});
    const { login } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);

    const submit = useCallback(
      async (credentials: ILoginData) => {
        setLoading(true);
        try {
          await login(credentials);
          onClose?.();
        } catch (error) {
        } finally {
          setLoading(false);
        }
      },
      [setLoading, login, onClose],
    );

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5rem",
        }}
        component="form"
        onSubmit={handleSubmit(submit)}
        ref={ref}
      >
        <Input
          {...register("username")}
          disabled={loading}
          errorMessage={formState.errors.username?.message}
        />

        <Input
          {...register("password")}
          disabled={loading}
          errorMessage={formState.errors.password?.message}
        />

        <Button disabled={loading} type="submit" variant="contained">
          Login
        </Button>
      </Box>
    );
  },
);

LoginForm.displayName = "LoginForm";

export default LoginForm;
