import { IGetFilterredEventsQuery } from "types/event.type";

const isValidParams = (params?: IGetFilterredEventsQuery) => {
  if (
    !params?.startDate &&
    !params?.endDate &&
    !params?.category &&
    !params?.search
  ) {
    return false;
  }

  return true;
};

export default isValidParams;
