import EventPreviewBox from "./EventPreviewBox";
import List from "@mui/material/List";
import React from "react";
import { IEvent } from "types/event.type";

interface EventsListProps {
  events: IEvent[];
}

const EventsList = ({ events }: EventsListProps) => {
  return (
    <List
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, minmax(100px, 1fr))",
          md: "repeat(4, minmax(150px, 1fr))",
        },
        rowGap: "1.5rem",
        columnGap: "1rem",
      }}
    >
      {events.map((event) => (
        <EventPreviewBox event={event} key={event.id} />
      ))}
    </List>
  );
};

export default EventsList;
