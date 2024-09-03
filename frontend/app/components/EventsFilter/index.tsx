"use client";

import Box from "@mui/material/Box";
import React, { useReducer } from "react";

import DatePicker from "@components/DatePicker";

type State = {
  fromDate: string | null;
  toDate: string | null;
  search: string | null;
  category: string | null;
};

const initState: State = {
  fromDate: null,
  toDate: null,
  search: null,
  category: null,
};

const reducer = (
  state: State,
  action: { key: keyof typeof initState; value: any },
): State => {
  return { ...state, [action.key]: action.value };
};

const EventsFilters = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Box>
      <DatePicker
        value={state.fromDate ?? ""}
        onChange={console.log}
        dateFormat="YYYY-MM-DD"
      />

      <DatePicker
        value={state.toDate ?? ""}
        onChange={console.log}
        dateFormat="YYYY-MM-DD"
      />  
    </Box>
  );
};

export default EventsFilters;
