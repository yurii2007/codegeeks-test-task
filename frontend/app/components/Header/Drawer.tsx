"use client";

import NavList from "./NavList";
import Box from "@mui/material/Box";
import React from "react";

type DrawerProps = {
  handleClick: () => void;
};

const Drawer = ({ handleClick }: DrawerProps) => {
  return (
    <Box onClick={handleClick} sx={{ textAlign: "center" }}>
      <NavList />
    </Box>
  );
};

export default Drawer;
