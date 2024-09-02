import EventPreviewBox from "./EventPreviewBox";
import List from "@mui/material/List";
import React from "react";
import { IEvent } from "types/event.type";

interface EventsListProps {
  events: IEvent[];
}

const EventsList = ({ events }: EventsListProps) => {
  return (
    <List>
      {events.map((event) => (
        <EventPreviewBox event={event} key={event.id} />
      ))}
    </List>
  );
};

export default EventsList;
