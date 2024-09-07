import axiosInstance from "@lib/axiosInstance";

import EventsList from "@components/EventsList";

const EventsPage = async () => {
  const { data } = await axiosInstance.get("/events");

  // TODO refactor filters
  return <EventsList events={data} />;
};

export default EventsPage;
