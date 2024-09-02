import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import React from "react";

const AuthSwitch = ({
  value,
  setValue,
}: {
  value: boolean;
  setValue: (val: boolean) => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: ".25rem",
      }}
    >
      <Typography>Signup</Typography>
      <Switch checked={value} onChange={(_, value) => setValue(value)} />
      <Typography>SignIn</Typography>
    </Box>
  );
};

export default AuthSwitch;
