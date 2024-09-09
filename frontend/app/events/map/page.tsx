import getEvents from "../actions/getEvents";
import EventsMap from "./EventsMap";

const EventsMapPage = async () => {
  const events = await getEvents();

  return <EventsMap events={events} />;
};

export default EventsMapPage;
