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

  const getEventById = useCallback(async (eventId: number) => {
    try {
      const data = await eventService.getEventById(eventId);
      return data;
    } catch (error) {
      return null;
    }
  }, []);

  const getRecommendedEvents = useCallback(async (eventId: number) => {
    try {
      const data = await eventService.getRecommendedEvents(eventId);
      return data;
    } catch (error) {
      return [];
    }
  }, []);

  return { getEvents, getEventById, getRecommendedEvents };
};

export default useEvents;
