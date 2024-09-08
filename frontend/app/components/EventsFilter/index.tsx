import CategoryFilter from "./CategoryFilter";
import ClearFiltersButton from "./ClearFiltersButton";
import DateFilter from "./DateFilter";
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
        justifyItems: "center",
      }}
    >
      <SearchFilter />
      <CategoryFilter />
      <DateFilter filter="startDate" />
      <DateFilter filter="endDate" />
      <ClearFiltersButton />
    </Box>
  );
};

export default EventsFilters;
