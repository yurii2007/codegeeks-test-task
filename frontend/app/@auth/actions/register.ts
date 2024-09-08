"use server";

import setCookies from "../../common/setCookies";
import { AxiosResponse } from "axios";
import { IRegisterData } from "types/login.type";
import { IUser } from "types/user.type";

import axiosInstance from "@lib/axiosInstance";

import { handleServerError } from "@utils/handleError";

const register = async (credentials: IRegisterData) => {
  try {
    const res: AxiosResponse<IUser> = await axiosInstance.post(
      "/auth/register",
      credentials,
    );

    setCookies(res);
    return res.data;
  } catch (error) {
    return handleServerError(error);
  }
};

export default register;
