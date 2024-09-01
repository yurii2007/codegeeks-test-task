"use client";

import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

import LoginForm from "@components/LoginForm";

const Login = () => {
  const router = useRouter();

  const closeModal = useCallback(() => router.back(), [router]);

  return (
    <Modal open onClose={closeModal}>
      <LoginForm />
    </Modal>
  );
};

export default Login;
