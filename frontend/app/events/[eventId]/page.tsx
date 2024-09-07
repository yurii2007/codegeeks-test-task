import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { IEvent } from "types/event.type";

import axiosInstance from "@lib/axiosInstance";

import { handleError } from "@utils/handleError";

import EventDetailView from "@components/EventDetailView";
import Loader from "@components/Loader";
import RecommendedList from "@components/RecommendedList";

async function getEvent(id: string) {
  try {
    if (!id) return null;

    const { data: event }: AxiosResponse<IEvent> = await axiosInstance.get(
      `/events/${id}`,
    );

    if (!event) return notFound();

    return event;
  } catch (error) {
    handleError(error);
    return notFound();
  }
}

export async function generateStaticParams() {
  try {
    const { data: events }: AxiosResponse<IEvent[]> = await axiosInstance.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/events`,
      {},
    );

    return events.map((event: IEvent) => ({
      id: event.id,
    }));
  } catch (error) {
    handleError(error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { eventId: string };
}) {
  const event = await getEvent(params.eventId);

  if (!event) return {};
  return {
    title: event.title,
  };
}

export default async function Page({
  params,
}: {
  params: { eventId: string };
}) {
  const event = await getEvent(params.eventId);

  if (!event) return <Loader fullSize />;

  return (
    <>
      <EventDetailView event={event} />
      <Suspense fallback={<Loader fullSize={false} />}>
        <RecommendedList eventId={params.eventId} />
      </Suspense>
    </>
  );
}
