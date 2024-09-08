"use client";

import EventForm from "./";
import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

const CreateEventButton = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleModal = useCallback(
    () => setModalOpen((p) => !p),
    [setModalOpen],
  );

  const afterSubmit = useCallback(async () => {
    toggleModal();
    router.refresh();
  }, [toggleModal, router]);

  return (
    <>
      <IconButton
        sx={{
          position: "fixed",
          bottom: "5%",
          right: "5%",
          borderRadius: "50%",
          backgroundColor: "#1D1D1D",
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
          <EventForm afterSubmit={afterSubmit} />

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
