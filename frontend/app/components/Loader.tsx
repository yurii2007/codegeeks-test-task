import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

type LoaderProps = {
  fullSize?: boolean;
};

const Loader = ({ fullSize = true }: LoaderProps) => {
  return (
    <Box
      sx={[
        fullSize ? optionalStyles.fullSize : {},
        { display: "grid", placeItems: "center" },
      ]}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;

const optionalStyles = {
  fullSize: {
    width: "100%",
    height: "100%",
  },
};
