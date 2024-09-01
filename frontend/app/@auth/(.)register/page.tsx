"use client";

import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

import RegisterForm from "@components/RegisterForm";

const Register = () => {
  const router = useRouter();

  const closeModal = useCallback(() => router.back(), [router]);

  return (
    <Modal open onClose={closeModal}>
      <RegisterForm />
    </Modal>
  );
};

export default Register;
