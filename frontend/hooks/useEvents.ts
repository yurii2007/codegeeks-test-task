import { useCallback } from "react";
import eventService from "services/event.service";

const useEvents = () => {
  const getEvents = useCallback(async () => {
    try {
      const data = await eventService.getEvents();
      return data;
    } catch (error) {
      return [];
    }
  }, []);

  return { getEvents };
};

export default useEvents;
