"use server";

import setCookies from "../../common/setCookies";
import { AxiosResponse } from "axios";
import { ILoginData } from "types/login.type";
import { IUser } from "types/user.type";

import axiosInstance from "@lib/axiosInstance";

import { handleServerError } from "@utils/handleError";

export const login = async (credentials: ILoginData) => {
  try {
    const res: AxiosResponse<IUser> = await axiosInstance.post(
      "/auth/login",
      credentials,
    );

    setCookies(res);
    return res.data;
  } catch (error) {
    return handleServerError(error);
  }
};

export default login;
