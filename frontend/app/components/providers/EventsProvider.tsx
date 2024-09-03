"use client";

import React, {
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { IEvent } from "types/event.type";

interface IEventsContext {
  events: IEvent[];
  setEvents: React.Dispatch<SetStateAction<IEvent[]>>;
}

const EventsContext = createContext<IEventsContext>({
  events: [],
  setEvents: () => {},
});

export const useEventsContext = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEventsContext must be used within a EventsProvider");
  }
  return context;
};

const EventsProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<IEvent[]>([]);

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
