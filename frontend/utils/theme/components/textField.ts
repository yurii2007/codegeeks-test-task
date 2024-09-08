import { Components, Theme } from "@mui/material";

export const textfield = {
  styleOverrides: {
    root: {
      "--TextField-brandBorderColor": "#E0E3E7",
      "--TextField-brandBorderHoverColor": "#FF6600",
      "--TextField-brandBorderFocusedColor": "#FF6600",
      "& label.Mui-focused": {
        color: "#111111",
      },
      "& label": {
        color: "#111111A0",
      },
    },
  },
} as Components<Theme>["MuiTextField"];
