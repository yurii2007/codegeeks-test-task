import Box from "@mui/material/Box";
import TextField, { BaseTextFieldProps } from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

interface InputProps extends BaseTextFieldProps {
  errorMessage?: string;
}
const FormInput = React.forwardRef<
  React.Ref<HTMLDivElement> | null,
  InputProps
>(({ name, label, errorMessage, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        display: "grid",
        gridTemplateRows: "1fr 40px",
        gap: ".25rem",
        width: "100%",
      }}
    >
      <TextField label={label} name={name} {...props} />
      <Typography
        sx={{ fontSize: { xs: ".875rem", md: ".875rem" } }}
        component="span"
        color="error"
      >
        {errorMessage}
      </Typography>
    </Box>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;
