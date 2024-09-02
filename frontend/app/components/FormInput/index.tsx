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
>(({ errorMessage, name, label, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{ display: "grid", gridTemplateRows: "1fr 20px", gap: ".25rem" }}
    >
      <TextField label={label} name={name} {...props} />
      <Typography component="span">{errorMessage}</Typography>
    </Box>
  );
});
FormInput.displayName = "FormInput";

export default FormInput;
