"use client";

import EventForm from "./";
import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";

const CreateEventButton = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => setModalOpen((p) => !p);

  return (
    <>
      <IconButton
        sx={{
          position: "fixed",
          bottom: "5%",
          right: "5%",
          borderRadius: "50%",
        }}
        onClick={toggleModal}
      >
        <UploadIcon color="action" />
      </IconButton>

      <Modal open={isModalOpen} onClose={toggleModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFFFFF",
            padding: "1.5rem",
          }}
        >
          <EventForm afterSubmit={toggleModal} />

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

export default CreateEventButton;
