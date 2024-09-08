import { Categories } from "./general.types";

export interface IEvent {
  id: number;
  createDateTime: Date;
  lastChangedDateTime: Date;
  title: string;
  date: Date;
  description: string;
  category: typeof Categories;
}

export interface ICreateEventData {
  title: string;
  date: Date;

  description: string;

  location: { latitude: number; longitude: number };
  category: typeof Categories;
}

export interface IUpdateEventData {
  title?: string;
  date?: Date;

  description?: string;

  location?: { latitude: number; longitude: number };
  category?: typeof Categories;
}

export interface IGetFilterredEventsQuery {
  startDate?: Date;
  endDate?: Date;
  category?: keyof typeof Categories;
  search?: string;
}
