"use client";

import React, { useEffect, useState } from "react";
import { IEvent } from "types/event.type";

import useEvents from "@hooks/useEvents";

import EventsList from "@components/EventsList";
import { useAuthContext } from "@components/providers/AuthProvider";

const RecommendedList = ({ eventId }: { eventId: number }) => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const { getRecommendedEvents } = useEvents();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        const data = await getRecommendedEvents(eventId);
        setEvents(data);
      } catch (error) {}
    })();
  }, [getRecommendedEvents, setEvents, user, eventId]);

  return <EventsList events={events} />;
};

export default RecommendedList;
