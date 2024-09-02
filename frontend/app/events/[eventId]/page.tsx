"use client";

import { useParams } from "next/navigation";
import React from "react";

import EventDetailView from "@components/EventDetailView";

const EventDetailsPage = () => {
  const { eventId } = useParams();

  return <EventDetailView eventId={+eventId} />;
};

export default EventDetailsPage;
