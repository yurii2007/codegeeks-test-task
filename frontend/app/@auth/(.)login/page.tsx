"use client";

import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

import AuthSwitch from "@components/AuthSwitch";
import LoginForm from "@components/LoginForm";
import RegisterForm from "@components/RegisterForm";

const Login = () => {
  const [formSwitch, setFormSwitch] = useState<boolean>(true);
  const router = useRouter();
  const closeModal = useCallback(() => router.back(), [router]);

  return (
    <Modal open onClose={closeModal}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40vw",
        }}
      >
        <AuthSwitch value={formSwitch} setValue={setFormSwitch} />
        {formSwitch ? (
          <LoginForm onClose={closeModal} />
        ) : (
          <RegisterForm onClose={closeModal} />
        )}
      </Paper>
    </Modal>
  );
};

export default Login;
