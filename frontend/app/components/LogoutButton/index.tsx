"use client";

import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import logout from "app/@auth/actions/logout";
import React from "react";

import { useAuthContext } from "@components/providers/AuthProvider";

const LogoutButton = () => {
  const { setUser } = useAuthContext();

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <IconButton onClick={handleLogout}>
      <LogoutIcon color="error" />
    </IconButton>
  );
};

export default LogoutButton;
