"use client";

import LocationPicker from "./LocationPicker";
import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import createEvent from "app/events/actions/createEvent";
import updateEvent from "app/events/actions/updateEvent";
import React, { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ICreateEventData, IEvent } from "types/event.type";
import { Categories } from "types/general.types";
import z from "zod";

import { handleClientError } from "@utils/handleError";

import DatePicker from "@components/DatePicker";
import Input from "@components/FormInput";

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
  const { handleSubmit, register, formState, setValue, watch, getValues } =
    useForm<z.infer<typeof createEventFormScheme>>({
      mode: "onBlur",
      resolver: zodResolver(createEventFormScheme),
      defaultValues: initialData
        ? {
            ...initialData,
            location: { latitude: 1, longitude: 1 },
          }
        : {
            location: { latitude: 1, longitude: 1 },
            category: "Social",
            date: new Date(),
          },
    });
  const [loading, setLoading] = useState<boolean>(false);

  watch(["date", "location"]);

  const submit: SubmitHandler<z.infer<typeof createEventFormScheme>> = async (
    data: ICreateEventData,
  ) => {
    setLoading(true);
    try {
      if (eventId) {
        const res = await updateEvent(eventId, data);
        if (typeof res === "string") return toast.error(res);
      } else {
        const res = await createEvent(data);
        if (typeof res === "string") return toast.error(res);
      }

      afterSubmit?.();
    } catch (error) {
      handleClientError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationChange = useCallback(
    (location: { latitude: number; longitude: number }) =>
      setValue("location", location),
    [setValue],
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: ".75rem",
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
        placeholder="Title"
        label="Title"
        errorMessage={formState.errors.title?.message}
        fullWidth
      />

      <Input
        {...register("description")}
        disabled={loading}
        required
        label="Description"
        placeholder="Description"
        errorMessage={formState.errors.description?.message}
        fullWidth
      />

      <TextField
        select
        fullWidth
        label="Category"
        placeholder="Category"
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
        onChange={(date) => setValue("date", new Date(date ?? ""))}
        customInput={<OutlinedInput fullWidth />}
        enableTabLoop={false}
        selected={getValues().date}
      />

      <LocationPicker
        selectedPosition={getValues().location}
        setSelectedPosition={handleLocationChange}
      />

      <Button disabled={loading} type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default EventForm;
