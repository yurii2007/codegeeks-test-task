"use client";

import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import React from "react";

import { useAuthContext } from "@components/providers/AuthProvider";

const LogoutButton = () => {
  const { setUser } = useAuthContext();

  return (
    <IconButton onClick={() => setUser(null)}>
      <LogoutIcon color="error" />
    </IconButton>
  );
};

export default LogoutButton;
