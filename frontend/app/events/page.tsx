import getEvents from "./actions/getEvents";

import EventsList from "@components/EventsList";

const EventsPage = async () => {
  const events = await getEvents();

  // TODO refactor filters
  return <EventsList events={events} />;
};

export default EventsPage;
