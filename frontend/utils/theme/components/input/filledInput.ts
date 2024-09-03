export const filledInput = {
  styleOverrides: {
    root: {
      "&::before, &::after": {
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
};
