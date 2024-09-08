import { Components, Theme } from "@mui/material";

export const Switch = {
  styleOverrides: {
    switchBase: {
      color: "#1D1D1D",
    },
    colorPrimary: {
      "&.Mui-checked": {
        color: "#FF6600",
      },
    },
    track: {
      opacity: 0.4,
      backgroundColor: "#1D1D1D",
      ".Mui-checked.Mui-checked + &": {
        opacity: 0.7,
        backgroundColor: "#FF6600",
      },
    },
  },
} as Components<Theme>["MuiSwitch"];
