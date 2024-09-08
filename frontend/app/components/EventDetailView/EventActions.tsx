import DeleteEvent from "./DeleteEvent";
import EditEvent from "./EditEvent";
import Box from "@mui/material/Box";
import React from "react";
import { IEvent } from "types/event.type";

type EventActionProps = {
  event: IEvent;
};

const EventActions = ({ event }: EventActionProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: ".25rem" }}>
      <DeleteEvent eventId={event.id} />
      <EditEvent event={event} />
    </Box>
  );
};

export default EventActions;
