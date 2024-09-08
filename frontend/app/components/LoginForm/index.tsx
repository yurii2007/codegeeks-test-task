"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import login from "app/@auth/actions/login";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ILoginData } from "types/login.type";
import z from "zod";

import { handleClientError } from "@utils/handleError";

import Input from "@components/FormInput";
import { useAuthContext } from "@components/providers/AuthProvider";

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
    >({
      mode: "onBlur",
      resolver: zodResolver(loginFormScheme),
    });
    const { setUser } = useAuthContext();
    const [loading, setLoading] = useState<boolean>(false);

    const submit: SubmitHandler<z.infer<typeof loginFormScheme>> = async (
      credentials: ILoginData,
    ) => {
      setLoading(true);
      try {
        const result = await login(credentials);
        if (!result || typeof result === "string")
          return toast.error(
            result ?? "Oops, something went wrong, please try again",
          );
        setUser(result);
        onClose?.();
      } catch (error) {
        handleClientError(error);
      } finally {
        setLoading(false);
      }
    };

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
        noValidate={false}
      >
        <Input
          {...register("username")}
          disabled={loading}
          required
          label="username"
          errorMessage={formState.errors.username?.message}
        />
        <Input
          {...register("password")}
          disabled={loading}
          required
          type="password"
          label="password"
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
