import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import React from "react";
import { IEvent } from "types/event.type";

const EventBox = ({ event }: { event: IEvent }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {event.title}
        </Typography>
        <Typography color="textSecondary">
          Date: {dayjs(event.date).format("YYYY-MM-DD")}
        </Typography>
        <Typography color="textSecondary">
          Description: {event.description}
        </Typography>
        <Typography color="textSecondary">
          Category: {event.category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventBox;
