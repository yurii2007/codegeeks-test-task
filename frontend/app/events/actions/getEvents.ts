"use server";

import { getHeaders } from "app/common/getHeaders";
import { AxiosResponse } from "axios";
import { IEvent, IGetFilterredEventsQuery } from "types/event.type";

import axiosInstance from "@lib/axiosInstance";

import { extractEventsParams } from "@utils/extractEventsParams";
import { handleServerError } from "@utils/handleError";
import isValidParams from "@utils/isValidParams";

const getEvents = async (params?: IGetFilterredEventsQuery) => {
  try {
    const url = isValidParams(params)
      ? `/events/filtered?${extractEventsParams(params)}`
      : "/events";
    const { data: events }: AxiosResponse<IEvent[]> = await axiosInstance.get(
      url,
      { headers: getHeaders() },
    );
    return events;
  } catch (error) {
    handleServerError(error);
    return [];
  }
};

export default getEvents;
