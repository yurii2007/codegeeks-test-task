"use client";

import EventBox from "./EventBox";
import EventNotFound from "./EventNotFound";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { IEvent } from "types/event.type";

import useEvents from "@hooks/useEvents";

import EventForm from "@components/EventForm";
import RecommendedList from "@components/RecommendedList";

const EventDetailView = ({ eventId }: { eventId: number }) => {
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<IEvent | null>(null);
  const { getEventById } = useEvents();
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getEventById(eventId);
        setEvent(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    })();
  }, [setLoading, getEventById, setEvent, eventId]);

  const toggleEdit = () => setIsEditOpen((p) => !p);

  if (loading) return <CircularProgress />;

  if (!event) return <EventNotFound />;

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <EventBox event={event} />
        <IconButton
          sx={{ position: "absolute", bottom: ".5rem", right: ".5rem" }}
          onClick={toggleEdit}
        >
          <EditIcon />
        </IconButton>
      </Box>
      <RecommendedList eventId={eventId} />

      <Modal open={isEditOpen} onClose={toggleEdit}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1D1D1D",
          }}
        >
          <EventForm
            afterSubmit={toggleEdit}
            eventId={eventId}
            initialData={{ ...event, date: new Date(event.date) }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default EventDetailView;
