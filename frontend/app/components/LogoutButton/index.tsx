"use client";

import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import React from "react";

import { useAuth } from "@hooks/useAuth";

const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <IconButton onClick={logout}>
      <LogoutIcon color="error" />
    </IconButton>
  );
};

export default LogoutButton;
