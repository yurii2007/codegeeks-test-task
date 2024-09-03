import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import React from "react";

import { navList } from "@lib/navList";

const NavList = () => {
  return (
    <List
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        display: "flex",
        gap: ".75rem",
      }}
    >
      {navList.map((item) => (
        <ListItem key={item.path} disablePadding>
          <Link
            style={{
              color: "#FF4400",
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
            href={item.path}
          >
            {item.label}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
