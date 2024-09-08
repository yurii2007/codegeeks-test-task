import getEventById from "../actions/getEventById";
import { AxiosResponse } from "axios";
import { Suspense } from "react";
import { IEvent } from "types/event.type";

import axiosInstance from "@lib/axiosInstance";

import { handleServerError } from "@utils/handleError";

import EventDetailView from "@components/EventDetailView";
import Loader from "@components/Loader";
import RecommendedList from "@components/RecommendedList";

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
    handleServerError(error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { eventId: string };
}) {
  const event = await getEventById(params.eventId);

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
  const event = await getEventById(params.eventId);

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
