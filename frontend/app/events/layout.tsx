import React from "react";

import ProtectedRoute from "@components/ProtectedRoute";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default layout;
