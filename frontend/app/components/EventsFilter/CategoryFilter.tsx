"use client";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import { useDebounce } from "react-use";
import { Categories } from "types/general.types";

import useUrlParams from "@hooks/useUrlParam";

const CategoryFilter = () => {
  const [search, setSearch] = useUrlParams("category");
  const [value, setValue] = useState<string>(search ?? "all");

  const onChange = (e: SelectChangeEvent<string>) => setValue(e.target.value);

  useDebounce(
    () => {
      setSearch("category", value === "all" ? "" : value);
    },
    350,
    [value],
  );

  return (
    <Select onChange={onChange} value={value}>
      {[...Categories, "All"].map((category) => (
        <MenuItem key={category} value={category.toLowerCase()}>
          {category}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CategoryFilter;
