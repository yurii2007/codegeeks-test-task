import { Categories } from "./general.types";

export interface IEvent {
  id: number;
  createDateTime: Date;
  lastChangedDateTime: Date;
  title: string;
  date: Date;
  description: string;
  category: Categories;
}

export interface ICreateEventData {
  title: string;
  date: Date;

  description: string;

  location: { latitude: number; longitude: number };
  category: Categories;
}

export interface IUpdateEventData {
  title?: string;
  date?: Date;

  description?: string;

  location?: { latitude: number; longitude: number };
  category?: Categories;
}

export interface GetFilterredEventsQuery {
  startDate?: Date;
  endDate?: Date;
  category?: Categories;
  search?: string;
}
