"use client";

import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDebounce } from "react-use";

import useUrlParams from "@hooks/useUrlParam";

const SearchFilter = () => {
  const [search, setSearch] = useUrlParams("search");
  const [value, setValue] = useState<string>(search ?? "");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setValue(e.target.value);

  useDebounce(
    () => {
      setSearch("search", value);
    },
    500,
    [value],
  );

  return <TextField onChange={onChange} value={value} label="Search" />;
};

export default SearchFilter;
