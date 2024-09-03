import { AxiosResponse } from "axios";
import dayjs from "dayjs";
import { ICreateEventData, IEvent, IUpdateEventData } from "types/event.type";

import { api } from "@utils/axios";

class EventService {
  static DEFAULT_RECOMMEND_FILTERS = {
    startDate: dayjs().add(-1, "month"),
    endDate: dayjs().add(1, "month"),
  };

  async getEvents() {
    const { data }: AxiosResponse<IEvent[]> = await api.get("/events");
    return data;
  }

  async createEvent(eventData: ICreateEventData) {
    const { data }: AxiosResponse<IEvent> = await api.post(
      "/events",
      eventData,
    );
    return data;
  }

  async updateEvent(eventId: number, eventData: IUpdateEventData) {
    const { data }: AxiosResponse<IEvent> = await api.patch(
      `/events${eventId}`,
      eventData,
    );
    return data;
  }

  async deleteEvent(eventId: number) {
    await api.delete(`/events${eventId}`);
  }

  async getEventById(eventId: number) {
    const { data }: AxiosResponse<IEvent> = await api.get(`/events/${eventId}`);
    return data;
  }

  async getRecommendedEvents(eventId: number) {
    const queryParams = new URLSearchParams({
      startDate: EventService.DEFAULT_RECOMMEND_FILTERS.startDate.toISOString(),
      endDate: EventService.DEFAULT_RECOMMEND_FILTERS.endDate.toISOString(),
    });
    const { data }: AxiosResponse<IEvent[]> = await api.get(
      `/events/${eventId}/recommended?${queryParams.toString()}`,
    );
    return data;
  }

  async getFilteredEvents(eventId: number) {
    const queryParams = new URLSearchParams({
      startDate: EventService.DEFAULT_RECOMMEND_FILTERS.startDate.toISOString(),
      endDate: EventService.DEFAULT_RECOMMEND_FILTERS.endDate.toISOString(),
    });
    const { data }: AxiosResponse<IEvent[]> = await api.get(
      `/events/${eventId}/recommended?${queryParams.toString()}`,
    );
    return data;
  }
}

export default new EventService();
