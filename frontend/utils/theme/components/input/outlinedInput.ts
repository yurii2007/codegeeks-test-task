import { Components, Theme, outlinedInputClasses } from "@mui/material";

export const outlinedInput = {
  styleOverrides: {
    notchedOutline: {
      borderColor: "var(--TextField-brandBorderColor)",
    },
    root: {
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "var(--TextField-brandBorderHoverColor)",
      },
      [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "var(--TextField-brandBorderFocusedColor)",
      },
      backgroundColor: "#CECECE",
      borderRadius: "1rem",
    },
  },
} as Components<Theme>["MuiOutlinedInput"];
