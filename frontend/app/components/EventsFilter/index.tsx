"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useReducer } from "react";
import { Categories } from "types/general.types";

import useEvents from "@hooks/useEvents";

import DatePicker from "@components/DatePicker";
import { useEventsContext } from "@components/providers/EventsProvider";

type State = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  search: string;
  category: typeof Categories | "All";
};

const initState: State = {
  startDate: undefined,
  endDate: undefined,
  search: "",
  category: "All",
};

const reducer = (
  state: State,
  action: { key: keyof typeof initState; value: any } | "reset",
): State => {
  if (action === "reset") return initState;
  return { ...state, [action.key]: action.value };
};

const EventsFilters = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { getFilteredEvents } = useEvents();
  const { setEvents } = useEventsContext();

  useEffect(() => {
    (async () => {
      try {
        const result = await getFilteredEvents({
          ...state,
          category: state.category === "All" ? undefined : state.category,
        });
        setEvents(result);
      } catch (error) {}
    })();
  }, [state, getFilteredEvents]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr) auto",
        gap: "1rem",
      }}
    >
      <TextField
        value={state.search}
        onChange={(e) => dispatch({ key: "search", value: e.target.value })}
      />

      <Select
        value={state.category}
        label="Category"
        fullWidth
        onChange={(e) => dispatch({ key: "category", value: e.target.value })}
      >
        {[...Categories, "All"].map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <Typography variant="body1">From Date:&nbsp;</Typography>
        <DatePicker
          selected={state.startDate}
          onChange={(date) =>
            dispatch({ key: "startDate", value: new Date(date ?? "") })
          }
          dateFormat="YYYY-MM-dd"
          maxDate={state.endDate}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <Typography variant="body1">To Date:&nbsp;</Typography>
        <DatePicker
          selected={state.endDate}
          minDate={state.startDate}
          onChange={(date) =>
            dispatch({ key: "endDate", value: new Date(date ?? "") })
          }
          dateFormat="YYYY-MM-dd"
        />
      </Box>

      <IconButton
        sx={{ gridRow: "1 / 3", gridColumn: "3" }}
        onClick={() => dispatch("reset")}
      >
        <DeleteIcon color="error" />
      </IconButton>
    </Box>
  );
};

export default EventsFilters;
