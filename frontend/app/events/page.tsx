import getEvents from "./actions/getEvents";

import EventsFilters from "@components/EventsFilter";
import EventsList from "@components/EventsList";

const EventsPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const events = await getEvents(searchParams);

  return (
    <>
      <EventsFilters />
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;
