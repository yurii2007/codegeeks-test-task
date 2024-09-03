"use client";

import React, { useEffect } from "react";

import useEvents from "@hooks/useEvents";

import EventsList from "@components/EventsList";
import { useAuthContext } from "@components/providers/AuthProvider";
import { useEventsContext } from "@components/providers/EventsProvider";

const Events = () => {
  const { events, setEvents } = useEventsContext();
  const { getEvents } = useEvents();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {}
    })();
  }, [user]);

  return <EventsList events={events} />;
};

export default Events;
