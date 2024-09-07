"use server";

import { getHeaders } from "app/common/getHeaders";
import { AxiosResponse } from "axios";
import { IEvent } from "types/event.type";

import axiosInstance from "@lib/axiosInstance";

import { handleServerError } from "@utils/handleError";

const getEvents = async () => {
  try {
    const { data: events }: AxiosResponse<IEvent[]> = await axiosInstance.get(
      "/events",
      { headers: getHeaders() },
    );
    return events;
  } catch (error) {
    handleServerError(error);
    return [];
  }
};

export default getEvents;
