import Events from "./events";
import Box from "@mui/material/Box";
import React from "react";

import EventsFilters from "@components/EventsFilter";
import EventsProvider from "@components/providers/EventsProvider";

const EventsPage = () => {
  return (
    <Box sx={{ padding: "1rem .5rem", margin: "0 auto" }} component="section">
      <EventsProvider>
        <EventsFilters />
        <Events />
      </EventsProvider>
    </Box>
  );
};

export default EventsPage;
