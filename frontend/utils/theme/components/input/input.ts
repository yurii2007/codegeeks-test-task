import { Components, Theme } from "@mui/material";

export const input = {
  styleOverrides: {
    root: {
      "&::before": {
        borderBottom: "2px solid var(--TextField-brandBorderColor)",
      },
      "&:hover:not(.Mui-disabled, .Mui-error):before": {
        borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
      },
      "&.Mui-focused:after": {
        borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
      },
      backgroundColor: "#CECECE",
    },
  },
} as Components<Theme>["MuiInput"];
