import CategoryFilter from "./CategoryFilter";
import ClearFiltersButton from "./ClearFiltersButton";
import DateFilter from "./DateFilter";
import SearchFilter from "./SearchFilter";
import Box from "@mui/material/Box";
import React, { Suspense } from "react";

import Loader from "@components/Loader";

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
      <Suspense fallback={<Loader />}>
        <SearchFilter />
        <CategoryFilter />
        <DateFilter filter="startDate" />
        <DateFilter filter="endDate" />
        <ClearFiltersButton />
      </Suspense>
    </Box>
  );
};

export default EventsFilters;
