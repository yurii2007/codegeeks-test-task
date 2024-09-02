"use client";

import MobileMenu from "./MobileMenu";
import NavList from "./NavList";
import UserIndicator from "./UserIndicator";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, [setMobileOpen]);

  return (
    <AppBar
      component="header"
      sx={{ display: "flex", backgroundColor: "#006c27" }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          EMS
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NavList />
        </Box>

        <UserIndicator />
      </Toolbar>
      <MobileMenu handleClose={handleDrawerToggle} isOpen={mobileOpen} />
    </AppBar>
  );
};

export default Header;
