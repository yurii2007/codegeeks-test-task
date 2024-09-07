"use server";

import { getHeaders } from "app/common/getHeaders";
import { AxiosResponse } from "axios";
import { IEvent, IUpdateEventData } from "types/event.type";

import axiosInstance from "@lib/axiosInstance";

import { handleServerError } from "@utils/handleError";

const updateEvent = async (
  eventId: number | string,
  eventData: IUpdateEventData,
) => {
  try {
    const { data: event }: AxiosResponse<IEvent> = await axiosInstance.patch(
      `/event/${eventId}`,
      eventData,
      { headers: getHeaders() },
    );
    return event;
  } catch (error) {
    return handleServerError(error);
  }
};

export default updateEvent;
