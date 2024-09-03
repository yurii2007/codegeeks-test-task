import { Components, Theme } from "@mui/material";

export const textfield = {
  styleOverrides: {
    root: {
      "--TextField-brandBorderColor": "#E0E3E7",
      "--TextField-brandBorderHoverColor": "#FF6600",
      "--TextField-brandBorderFocusedColor": "#FF6600",
      "& label.Mui-focused": {
        color: "var(--TextField-brandBorderFocusedColor)",
      },
    },
  },
} as Components<Theme>["MuiTextField"];
