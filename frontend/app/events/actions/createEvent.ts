"use server";

import { getHeaders } from "app/common/getHeaders";
import { AxiosResponse } from "axios";
import { ICreateEventData, IEvent } from "types/event.type";

import axiosInstance from "@lib/axiosInstance";

import { handleServerError } from "@utils/handleError";

const createEvent = async (eventData: ICreateEventData) => {
  try {
    const { data: event }: AxiosResponse<IEvent> = await axiosInstance.post(
      "/events",
      eventData,
      { headers: getHeaders() },
    );
    return event;
  } catch (error) {
    return handleServerError(error);
  }
};

export default createEvent;
