import { AxiosResponse } from "axios";
import dayjs from "dayjs";
import {
  GetFilterredEventsQuery,
  ICreateEventData,
  IEvent,
  IUpdateEventData,
} from "types/event.type";

import axiosInstance from "@lib/axiosInstance";

import filterObject from "@utils/filterObject";

class EventService {
  static DEFAULT_RECOMMEND_FILTERS = {
    startDate: dayjs().add(-3, "month"),
    endDate: dayjs().add(3, "month"),
  };

  async getEvents() {
    const { data }: AxiosResponse<IEvent[]> =
      await axiosInstance.get("/events");
    return data;
  }

  async createEvent(eventData: ICreateEventData) {
    const { data }: AxiosResponse<IEvent> = await axiosInstance.post(
      "/events",
      eventData,
    );
    return data;
  }

  async updateEvent(eventId: number, eventData: IUpdateEventData) {
    const { data }: AxiosResponse<IEvent> = await axiosInstance.patch(
      `/events/${eventId}`,
      eventData,
    );
    return data;
  }

  async deleteEvent(eventId: number) {
    await axiosInstance.delete(`/events/${eventId}`);
  }

  async getEventById(eventId: number) {
    const { data }: AxiosResponse<IEvent> = await axiosInstance.get(
      `/events/${eventId}`,
    );
    return data;
  }

  async getRecommendedEvents(eventId: number) {
    const queryParams = new URLSearchParams({
      startDate: EventService.DEFAULT_RECOMMEND_FILTERS.startDate.toISOString(),
      endDate: EventService.DEFAULT_RECOMMEND_FILTERS.endDate.toISOString(),
    });
    const { data }: AxiosResponse<IEvent[]> = await axiosInstance.get(
      `/events/${eventId}/recommended?${queryParams.toString()}`,
    );
    return data;
  }

  async getFilteredEvents(query: GetFilterredEventsQuery) {
    const queryParams = new URLSearchParams({
      ...filterObject(query),
      fromDate: query.startDate
        ? query.startDate.toISOString()
        : EventService.DEFAULT_RECOMMEND_FILTERS.startDate.toISOString(),
      toDate: query.endDate
        ? query.endDate.toISOString()
        : EventService.DEFAULT_RECOMMEND_FILTERS.endDate.toISOString(),
    });
    const { data }: AxiosResponse<IEvent[]> = await axiosInstance.get(
      `/events/filtered?${queryParams.toString()}`,
    );
    return data;
  }
}

export default new EventService();
