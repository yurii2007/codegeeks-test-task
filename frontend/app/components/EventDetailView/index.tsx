import EventActions from "./EventActions";
import EventBox from "./EventBox";
import React from "react";
import { IEvent } from "types/event.type";

const EventDetailView = ({ event }: { event: IEvent }) => {
  return (
    <EventBox event={event}>
      <EventActions event={event} />
    </EventBox>
  );
};

export default EventDetailView;
