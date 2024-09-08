"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import React from "react";

const ClearFiltersButton = () => {
  const router = useRouter();

  return (
    <IconButton
      sx={{ gridRow: "1 / 3", gridColumn: "3" }}
      onClick={() => router.replace("/events")}
    >
      <DeleteIcon color="error" />
    </IconButton>
  );
};

export default ClearFiltersButton;
