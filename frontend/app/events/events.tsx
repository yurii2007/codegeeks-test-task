"use client";

import React, { useEffect, useState } from "react";
import { IEvent } from "types/event.type";

import useEvents from "@hooks/useEvents";

import EventsList from "@components/EventsList";
import { useAuthContext } from "@components/providers/AuthProvider";

const Events = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
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
  }, [getEvents, setEvents, user]);

  return <EventsList events={events} />;
};

export default Events;
