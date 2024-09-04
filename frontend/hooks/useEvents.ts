import { useCallback } from "react";
import eventService from "services/event.service";
import {
  GetFilterredEventsQuery,
  ICreateEventData,
  IUpdateEventData,
} from "types/event.type";

import { handleError } from "@utils/handleError";

const useEvents = () => {
  const getEvents = useCallback(async () => {
    try {
      const data = await eventService.getEvents();
      return data;
    } catch (error) {
      handleError(error);
      return [];
    }
  }, []);

  const getEventById = useCallback(async (eventId: number) => {
    try {
      const data = await eventService.getEventById(eventId);
      return data;
    } catch (error) {
      handleError(error);
      return null;
    }
  }, []);

  const getRecommendedEvents = useCallback(async (eventId: number) => {
    try {
      const data = await eventService.getRecommendedEvents(eventId);
      return data;
    } catch (error) {
      handleError(error);
      return [];
    }
  }, []);

  const getFilteredEvents = useCallback(
    async (query: GetFilterredEventsQuery) => {
      try {
        const data = await eventService.getFilteredEvents(query);
        return data;
      } catch (error) {
        handleError(error);
        return [];
      }
    },
    [],
  );

  const createEvent = useCallback(async (eventData: ICreateEventData) => {
    try {
      const data = await eventService.createEvent(eventData);
      return data;
    } catch (error) {
      handleError(error);
      return null;
    }
  }, []);

  const updateEvent = useCallback(
    async (eventId: number, eventData: IUpdateEventData) => {
      try {
        const data = await eventService.updateEvent(eventId, eventData);
        return data;
      } catch (error) {
        handleError(error);
        return null;
      }
    },
    [],
  );

  const deleteEvent = useCallback(async (eventId: number) => {
    try {
      await eventService.deleteEvent(eventId);
      return true;
    } catch (error) {
      handleError(error);
      return false;
    }
  }, []);

  return {
    getEvents,
    getEventById,
    getRecommendedEvents,
    getFilteredEvents,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};

export default useEvents;
