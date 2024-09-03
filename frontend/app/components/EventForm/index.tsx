"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICreateEventData, IEvent } from "types/event.type";
import { Categories } from "types/general.types";
import z from "zod";

import useEvents from "@hooks/useEvents";

import DatePicker from "@components/DatePicker";
import Input from "@components/FormInput";
import { useEventsContext } from "@components/providers/EventsProvider";

const createEventFormScheme = z.object({
  title: z.string().min(1, "Please enter a valid title"),
  date: z.date({ message: "Please provide a valid date" }),
  description: z.string().min(1, "Description is required"),
  location: z.object({ latitude: z.number(), longitude: z.number() }),
  category: z.enum(Categories),
});

type EventFormProps = {
  initialData?: IEvent;
  eventId?: number;
  afterSubmit?: () => void;
};

const EventForm = ({ eventId, initialData, afterSubmit }: EventFormProps) => {
  const { handleSubmit, register, formState, getValues, setValue } = useForm<
    z.infer<typeof createEventFormScheme>
  >({
    mode: "onBlur",
    resolver: zodResolver(createEventFormScheme),
    // @ts-expect-error fix enum issue
    defaultValues: {
      ...initialData,
      location: { latitude: 1, longitude: 1 },
    } || {
      location: { latitude: 1, longitude: 1 },
      category: "Social",
      date: new Date(),
    },
  });
  const { createEvent, updateEvent } = useEvents();
  const { setEvents } = useEventsContext();
  const [loading, setLoading] = useState<boolean>(false);

  // @ts-expect-error fix enum issue
  const submit: SubmitHandler<z.infer<typeof createEventFormScheme>> = async (
    data: ICreateEventData,
  ) => {
    setLoading(true);
    try {
      if (eventId) {
        const updatedEvent = await updateEvent(eventId, data);
        if (!updatedEvent) return;
        setEvents((prev) =>
          prev.map((event) =>
            event.id === updatedEvent.id
              ? { ...event, ...updatedEvent }
              : event,
          ),
        );
      } else {
        const event = await createEvent(data);
        if (!event) return;
        setEvents((prev) => [...prev, event]);
      }

      afterSubmit?.();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: ".5rem",
        width: "40vw",
      }}
      component="form"
      onSubmit={handleSubmit(submit)}
      noValidate={false}
    >
      <Input
        {...register("title")}
        disabled={loading}
        required
        errorMessage={formState.errors.title?.message}
      />

      <Input
        {...register("description")}
        disabled={loading}
        required
        errorMessage={formState.errors.description?.message}
      />

      <TextField
        select
        fullWidth
        label="Category"
        defaultValue={formState.defaultValues?.category}
        slotProps={{
          htmlInput: register("category", {
            required: "Please choose catogory",
          }),
        }}
        error={!!formState.errors.category?.message}
        helperText={formState.errors.category?.message}
      >
        {Categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>

      <DatePicker
        selected={getValues().date}
        onChange={(date) => setValue("date", new Date(date ?? ""))}
        dateFormat="YYYY-MM-dd"
      />

      <Button disabled={loading} type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default EventForm;
