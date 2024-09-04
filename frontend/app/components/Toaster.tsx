import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },

        success: {
          duration: 2000,
        },
        error: {
          duration: 4000,
        },
      }}
    />
  );
};

export default ToasterProvider;
