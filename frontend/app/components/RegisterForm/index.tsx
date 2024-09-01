"use client";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { ILoginData } from "types/login.type";
import z from "zod";

import { useAuth } from "@hooks/useAuth";

import Input from "@components/FormInput";

const registerFormScheme = z.object({
  username: z.string().min(1, "Please enter a valid username"),
  password: z
    .string()
    .min(8, "The password must contain at least 8 characters"),
});

type RegisterFormProps = {};

const RegisterForm = React.forwardRef<HTMLFormElement, RegisterFormProps>(
  (props, ref) => {
    const { handleSubmit, register, formState } = useForm<
      z.infer<typeof registerFormScheme>
    >({});
    const { register: submitRegister } = useAuth();

    const submit = useCallback(async (credentials: ILoginData) => {
      await submitRegister(credentials);
    }, []);

    return (
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40vw",
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
          errorMessage={formState.errors.username?.message}
        />

        <Input
          {...register("password")}
          errorMessage={formState.errors.password?.message}
        />

        <Button type="submit" variant="contained">
          Signup
        </Button>
      </Paper>
    );
  },
);

export default RegisterForm;
