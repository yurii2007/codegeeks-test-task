import { IGetFilterredEventsQuery } from "types/event.type";
import { Categories } from "types/general.types";

export const extractEventsParams = (params: IGetFilterredEventsQuery = {}) => {
  const searchParams = new URLSearchParams();
  if (params.hasOwnProperty("category")) {
    const category = Categories.find(
      (category) =>
        category.toLowerCase() ===
        params.category?.toString().trim().toLowerCase(),
    );
    if (category) searchParams.append("category", category);
  }

  if (params.hasOwnProperty("search"))
    searchParams.append("search", params.search?.trim()?.toLowerCase() ?? "");

  if (
    params.hasOwnProperty("startDate") &&
    !isNaN(new Date(params.startDate ?? "").getMilliseconds())
  ) {
    searchParams.append(
      "startDate",
      new Date(params.startDate ?? "").toISOString(),
    );
  }

  if (
    params.hasOwnProperty("endDate") &&
    !isNaN(new Date(params.endDate ?? "").getMilliseconds())
  ) {
    searchParams.append(
      "endDate",
      new Date(params.endDate ?? "").toISOString(),
    );
  }

  return searchParams.toString();
};
