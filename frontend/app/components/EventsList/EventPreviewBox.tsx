import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import React from "react";
import { IEvent } from "types/event.type";

const EventPreviewBox = ({ event }: { event: IEvent }) => {
  return (
    <ListItem>
      <Link href={`events/${event.id}`}>
        <ListItemText primary={event.title} />
      </Link>
    </ListItem>
  );
};

export default EventPreviewBox;
