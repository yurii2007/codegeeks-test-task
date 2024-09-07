import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import React from "react";
import { IEvent } from "types/event.type";

const EventBox = ({
  event,
  children,
}: {
  event: IEvent;
  children: React.ReactNode;
}) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
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
        </Stack>
        {children}
      </CardContent>
    </Card>
  );
};

export default EventBox;
