import { Link } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React from "react";

import { navList } from "@lib/navList";

const NavList = () => {
  return (
    <List
      sx={{
        flexDirection: "row",
        display: "flex",
        gap: ".75rem",
      }}
    >
      {navList.map((item) => (
        <ListItem key={item.path} disablePadding>
          <Link href={item.path}>{item.label}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
