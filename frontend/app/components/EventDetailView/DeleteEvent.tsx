"use client";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

import axiosInstance from "@lib/axiosInstance";

import { handleClientError } from "@utils/handleError";

import AlertDialog from "@components/AlertDialog";

type DeleteEventProps = {
  eventId: number | string;
};

const DeleteEvent = ({ eventId }: DeleteEventProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleAlert = useCallback(
    () => setIsDialogOpen((p) => !p),
    [setIsDialogOpen],
  );

  const handleDelete = useCallback(async () => {
    try {
      await axiosInstance.delete(`/events/${eventId}`);

      router.replace("/events");
    } catch (error) {
      handleClientError(error);
    }
  }, [router, eventId]);

  return (
    <>
      <IconButton onClick={toggleAlert}>
        <DeleteForeverIcon color="error" />
      </IconButton>
      <AlertDialog
        action={handleDelete}
        onClose={toggleAlert}
        open={isDialogOpen}
      />
    </>
  );
};

export default DeleteEvent;
