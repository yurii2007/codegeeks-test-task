"use client";

import { useAuthContext } from "./providers/AuthProvider";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      return redirect("/");
    }
  }, [user]);
  return children;
};

export default ProtectedRoute;
