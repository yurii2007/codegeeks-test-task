export interface IEvent {
  id: number;
  createDateTime: Date;
  lastChangedDateTime: Date;
  title: string;
  date: Date;
  description: string;
  category: string;
}

export interface ICreateEventData {
  title: string;
  date: Date;

  description: string;

  location: { latitude: number; longitude: number };
  category: string;
}

export interface IUpdateEventData {
  title?: string;
  date?: Date;

  description?: string;

  location?: { latitude: number; longitude: number };
  category?: string;
}
