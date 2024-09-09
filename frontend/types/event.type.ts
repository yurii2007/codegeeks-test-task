import { Categories } from "./general.types";

export interface IEvent {
  id: number;
  createDateTime: Date;
  lastChangedDateTime: Date;
  title: string;
  date: Date;
  description: string;
  category: (typeof Categories)[number];
  location: { latitude: number; longitude: number };
}

export interface ICreateEventData {
  title: string;
  date: Date;

  description: string;

  location: { latitude: number; longitude: number };
  category: (typeof Categories)[number];
}

export interface IUpdateEventData {
  title?: string;
  date?: Date;

  description?: string;

  location?: { latitude: number; longitude: number };
  category?: (typeof Categories)[number];
}

export interface IGetFilterredEventsQuery {
  startDate?: Date;
  endDate?: Date;
  category?: (typeof Categories)[number];
  search?: string;
}
