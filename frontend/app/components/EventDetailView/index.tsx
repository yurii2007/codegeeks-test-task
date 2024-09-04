"use client";

import EventBox from "./EventBox";
import EventNotFound from "./EventNotFound";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { IEvent } from "types/event.type";

import { handleError } from "@utils/handleError";

import useEvents from "@hooks/useEvents";

import AlertDialog from "@components/AlertDialog";
import EventForm from "@components/EventForm";
import RecommendedList from "@components/RecommendedList";

const EventDetailView = ({ eventId }: { eventId: number }) => {
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<IEvent | null>(null);
  const { getEventById, deleteEvent } = useEvents();
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const data = await getEventById(eventId);
        setEvent(data);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [setLoading, getEventById, setEvent, eventId]);

  const handleDelete = useCallback(async () => {
    const result = await deleteEvent(eventId);
    if (result) {
      router.replace("/events");
    }
  }, [router, event, deleteEvent]);

  const toggleEdit = () => setIsEditOpen((p) => !p);
  const toggleAlert = () => setIsAlertOpen((p) => !p);

  if (loading) return <CircularProgress />;

  if (!event) return <EventNotFound />;

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <EventBox event={event} />
        <Box sx={{ position: "absolute", bottom: ".5rem", right: ".5rem" }}>
          <IconButton onClick={toggleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={toggleAlert}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      </Box>
      <RecommendedList eventId={eventId} />

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
            afterSubmit={toggleEdit}
            eventId={eventId}
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

      <AlertDialog
        action={handleDelete}
        onClose={toggleAlert}
        open={isAlertOpen}
      />
    </>
  );
};

export default EventDetailView;
