"use client";

import { Stack } from "@mui/material";
import { Marker } from "@react-google-maps/api";
import React from "react";
import { IEvent } from "types/event.type";

import { MapComponent } from "@components/Map";

type EventsMapProps = { events: IEvent[] };

const EventsMap = ({ events }: EventsMapProps) => {
  return (
    <Stack sx={{ width: "100%", height: "80vh" }}>
      <MapComponent>
        {events.map(({ id, location: { latitude, longitude } }) => (
          <Marker key={id} position={{ lat: latitude, lng: longitude }} />
        ))}
      </MapComponent>
    </Stack>
  );
};

export default EventsMap;
