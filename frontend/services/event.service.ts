import { AxiosResponse } from "axios";
import { ICreateEventData, IEvent, IUpdateEventData } from "types/event.type";

import { api } from "@utils/axios";

class EventService {
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
}

export default new EventService();
