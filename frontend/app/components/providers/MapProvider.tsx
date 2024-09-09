"use client";

import Typography from "@mui/material/Typography";
import { useJsApiLoader } from "@react-google-maps/api";
import { ReactNode } from "react";

import Loader from "@components/Loader";

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (loadError)
    return <Typography>Encountered error while loading google maps</Typography>;

  if (!scriptLoaded) return <Loader />;

  return children;
}
