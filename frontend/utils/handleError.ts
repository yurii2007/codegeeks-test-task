import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { AxiosDefaultErrorBody } from "types/general.types";

export const handleClientError = (
  err: unknown | AxiosError<AxiosDefaultErrorBody>,
) => {
  if (axios.isAxiosError(err)) {
    if (err.response?.status === 401) return;
    toast.error(err.response?.data.message);
  } else if (err instanceof Error) {
    toast.error(err.message);
  } else if (typeof err === "string") {
    toast.error(err);
  } else {
    toast("Oops, something went wrong, please try again");
  }
};

export const handleServerError = (
  err: unknown | AxiosError<AxiosDefaultErrorBody>,
): string | undefined => {
  if (axios.isAxiosError(err)) {
    if (err.response?.status === 401) return;
    return err.response?.data.message;
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return "Oops, something went wrong, please try again";
  }
};
