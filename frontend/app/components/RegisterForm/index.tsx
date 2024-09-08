"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import registerAction from "app/@auth/actions/register";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ILoginData } from "types/login.type";
import z from "zod";

import Input from "@components/FormInput";
import { useAuthContext } from "@components/providers/AuthProvider";

const registerFormScheme = z.object({
  username: z.string().min(1, "Please enter a valid username"),
  password: z
    .string()
    .min(8, "The password must contain at least 8 characters"),
});

type RegisterFormProps = {
  onClose: () => void;
};

const RegisterForm = React.forwardRef<HTMLFormElement, RegisterFormProps>(
  ({ onClose }, ref) => {
    const { setUser } = useAuthContext();
    const { handleSubmit, register, formState } = useForm<
      z.infer<typeof registerFormScheme>
    >({});

    const submit = useCallback(
      async (credentials: ILoginData) => {
        const result = await registerAction(credentials);
        if (!result || typeof result === "string")
          return toast.error(
            result ?? "Oops, something went wrong, please try again",
          );
        setUser(result);
        onClose?.();
      },
      [onClose, setUser],
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
          required
          label="username"
          autoComplete="username"
          errorMessage={formState.errors.username?.message}
        />

        <Input
          {...register("password")}
          required
          type="password"
          label="password"
          autoComplete="current-password"
          errorMessage={formState.errors.password?.message}
        />

        <Button type="submit" variant="contained">
          Signup
        </Button>
      </Box>
    );
  },
);

RegisterForm.displayName = "RegisterForm";

export default RegisterForm;
