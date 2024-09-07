"use client";

import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { IEvent } from "types/event.type";

import EventForm from "@components/EventForm";

const EditEvent = ({ event }: { event: IEvent }) => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleEdit = useCallback(
    () => setIsEditOpen((p) => !p),
    [setIsEditOpen],
  );

  const afterSubmit = useCallback(async () => {
    toggleEdit();
    router.refresh();
  }, [toggleEdit, router]);

  return (
    <>
      <IconButton onClick={toggleEdit}>
        <EditIcon color="action" />
      </IconButton>
      <Modal open={isEditOpen} onClose={toggleEdit}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFFFFF",
            padding: "1.5rem",
          }}
        >
          <EventForm
            afterSubmit={afterSubmit}
            eventId={event.id}
            initialData={{ ...event, date: new Date(event.date) }}
          />

          <IconButton
            sx={{
              position: "absolute",
              top: ".25rem",
              right: ".25rem",
              padding: 0,
            }}
            onClick={toggleEdit}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default EditEvent;
