import axios, { AxiosResponse } from "axios";
import { IEvent } from "types/event.type";

import { handleServerError } from "@utils/handleError";

import EventsList from "@components/EventsList";

const getRecommendedEvents = async (eventId: number | string) => {
  try {
    const queryParams = new URLSearchParams({});
    const { data }: AxiosResponse<IEvent[]> = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/events/${eventId}/recommended?${queryParams.toString()}`,
    );
    return data;
  } catch (error) {
    handleServerError(error);
    return [];
  }
};
const RecommendedList = async ({ eventId }: { eventId: number | string }) => {
  const recommendedEvents = await getRecommendedEvents(eventId);

  return <EventsList events={recommendedEvents} />;
};

export default RecommendedList;
