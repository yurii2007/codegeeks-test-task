import { Components, Theme } from "@mui/material";

export const button = {
  styleOverrides: {
    root: {
      border: "none",
      borderRadius: "1rem",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
      outline: "none",
      transition: "transform 0.3s ease 0s, scale 0.3s ease 0s",
      color: "#FFFFFF",
      "&:hover": {
        boxShadow: "0px 15px 20px #FF6600",
        transform: "translateY(-7px) scale(1.05)",
      },
    },
  },
  variants: [
    {
      props: { variant: "text" },
      style: {
        border: "1px solid #FF6600",
      },
    },
    {
      props: { variant: "contained" },
      style: {
        backgroundColor: "#1D1D1D",
      },
    },
  ],
} as Components<Theme>["MuiButton"];
