"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import LogoutButton from "@components/LogoutButton";
import { useAuthContext } from "@components/providers/AuthProvider";

const UserIndicator = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {user ? (
        <>
          <Typography sx={{ marginRight: ".75rem" }}>
            Welcome, {user.username}
          </Typography>
          <LogoutButton />
        </>
      ) : (
        <Button onClick={() => router.replace("/login")}>Login</Button>
      )}
    </Box>
  );
};

export default UserIndicator;
