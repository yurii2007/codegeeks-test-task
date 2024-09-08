import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { IEvent } from "types/event.type";

type EventPreviewBoxProps = {
  event: IEvent;
};

const EventPreviewBox = ({ event }: EventPreviewBoxProps) => {
  return (
    <ListItem>
      <Link style={{ textDecoration: "none" }} href={`/events/${event.id}`}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {event.title}
            </Typography>
            <Typography color="textSecondary">
              Date: {dayjs(event.date).format("YYYY-MM-DD")}
            </Typography>
            <Typography color="textSecondary">
              Category: {event.category}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </ListItem>
  );
};

export default EventPreviewBox;
