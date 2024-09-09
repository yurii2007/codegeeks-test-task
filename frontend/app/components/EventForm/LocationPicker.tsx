"use client";

import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { Marker } from "@react-google-maps/api";
import React, { useCallback, useEffect, useState } from "react";

import { MapComponent } from "@components/Map";

type LocationPickerProps = {
  selectedPosition: { latitude: number; longitude: number };
  setSelectedPosition: (position: {
    latitude: number;
    longitude: number;
  }) => void;
};

const LocationPicker = ({
  selectedPosition,
  setSelectedPosition,
}: LocationPickerProps) => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setSelectedPosition({ latitude, longitude });
      },
    );
  }, []);

  const toggleModal = useCallback(
    () => setIsMapModalOpen((p) => !p),
    [setIsMapModalOpen],
  );

  const handleLocationChange = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (!e.latLng?.lat || !e.latLng.lng) return;
      setSelectedPosition({
        latitude: e.latLng.lat(),
        longitude: e.latLng.lng(),
      });
    },
    [setSelectedPosition],
  );

  return (
    <>
      <Button onClick={toggleModal}>Select location</Button>

      <Modal open={isMapModalOpen} onClose={toggleModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            height: "70vh",
            backgroundColor: "#FFFFFF",
            padding: "1.5rem",
          }}
        >
          <MapComponent
            center={{
              lat: selectedPosition.latitude,
              lng: selectedPosition.longitude,
            }}
            onDblClick={handleLocationChange}
          >
            {selectedPosition && (
              <Marker
                position={{
                  lat: selectedPosition.latitude,
                  lng: selectedPosition.longitude,
                }}
              />
            )}
          </MapComponent>

          <IconButton
            sx={{
              position: "absolute",
              top: ".25rem",
              right: ".25rem",
              padding: 0,
            }}
            onClick={toggleModal}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default LocationPicker;
