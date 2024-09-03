import React from "react";

import CreateEventButton from "@components/EventForm/CreateEventButton";
import ProtectedRoute from "@components/ProtectedRoute";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      {children}
      <CreateEventButton />
    </ProtectedRoute>
  );
};

export default layout;
