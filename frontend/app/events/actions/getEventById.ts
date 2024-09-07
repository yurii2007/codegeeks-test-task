"use server";

import { getHeaders } from "app/common/getHeaders";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";
import { IEvent } from "types/event.type";

import axiosInstance from "@lib/axiosInstance";

import { handleServerError } from "@utils/handleError";

const getEventById = async (eventId: number | string) => {
  try {
    if (!eventId) return null;

    const { data: event }: AxiosResponse<IEvent> = await axiosInstance.get(
      `/events/${eventId}`,
      { headers: getHeaders() },
    );

    if (!event) return notFound();

    return event;
  } catch (error) {
    handleServerError(error);
    return notFound();
  }
};

export default getEventById;
