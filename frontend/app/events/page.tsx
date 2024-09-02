import Events from "./events";
import React from "react";

import ProtectedRoute from "@components/ProtectedRoute";

const EventsPage = () => {
  return (
    <ProtectedRoute>
      <Events />
    </ProtectedRoute>
  );
};

export default EventsPage;
