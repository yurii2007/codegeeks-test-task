"use client";

import Stack from "@mui/material/Stack";
import { GoogleMap, GoogleMapProps } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
};

const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};

interface MapComponentProps extends GoogleMapProps {
  children?: React.ReactNode;
}

const MapComponent = ({ children, ...props }: MapComponentProps) => {
  return (
    <Stack sx={{ width: "100%", height: "100%" }}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        options={{ ...defaultMapOptions }}
        zoom={15}
        center={defaultMapCenter}
        {...props}
      >
        {children}
      </GoogleMap>
    </Stack>
  );
};

export { MapComponent };
