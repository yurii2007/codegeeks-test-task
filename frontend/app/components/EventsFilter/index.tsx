import CategoryFilter from "./CategoryFilter";
import ClearFiltersButton from "./ClearFiltersButton";
import SearchFilter from "./SearchFilter";
import Box from "@mui/material/Box";
import React from "react";

const EventsFilters = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr) auto",
        gap: "1rem",
      }}
    >
      <SearchFilter />
      <CategoryFilter />
      <div>datepicker</div>
      <div>datepciker</div>
      <ClearFiltersButton />
    </Box>
  );
};

export default EventsFilters;
