"use client";

import EventBox from "./EventBox";
import EventNotFound from "./EventNotFound";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { IEvent } from "types/event.type";

import useEvents from "@hooks/useEvents";

import RecommendedList from "@components/RecommendedList";

const EventDetailView = ({ eventId }: { eventId: number }) => {
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<IEvent | null>(null);
  const { getEventById } = useEvents();

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

  if (loading) return <CircularProgress />;

  if (!event) return <EventNotFound />;

  return (
    <>
      <EventBox event={event} />
      <RecommendedList eventId={eventId} />
    </>
  );
};

export default EventDetailView;
