import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { AxiosDefaultErrorBody } from "types/general.types";

export const handleError = (
  err: unknown | AxiosError<AxiosDefaultErrorBody>,
) => {
  if (axios.isAxiosError(err)) {
    if (err.response?.status === 401) return;
    toast.error(err.response?.data.message);
    return;
  } else if (err instanceof Error) {
    toast.error(err.message);
    return;
  } else {
    return toast("Oops, something went wrong, please try again");
  }
};
