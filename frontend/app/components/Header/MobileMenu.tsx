"use client";

import Drawer from "./Drawer";
import MuiDrawer from "@mui/material/Drawer";
import React from "react";

type NavigationProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const MobileMenu = ({ handleClose, isOpen }: NavigationProps) => {
  const container = typeof window !== "undefined" ? document.body : undefined;
  return (
    <nav>
      <MuiDrawer
        container={container}
        variant="temporary"
        open={isOpen}
        onClose={handleClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <Drawer handleClick={handleClose} />
      </MuiDrawer>
    </nav>
  );
};

export default MobileMenu;
