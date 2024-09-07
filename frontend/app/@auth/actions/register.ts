"use server";

import { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { IRegisterData } from "types/login.type";
import { IUser } from "types/user.type";

import axiosInstance from "@lib/axiosInstance";

import { handleServerError } from "@utils/handleError";

const register = async (credentials: IRegisterData) => {
  try {
    const res: AxiosResponse<IUser> = await axiosInstance.post(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/register`,
      credentials,
    );

    setAuthCookie(res);
    return res.data;
  } catch (error) {
    return handleServerError(error);
  }
};

const setAuthCookie = (response: AxiosResponse<any>) => {
  const responseCookies = response.headers["set-cookie"];

  responseCookies?.forEach((cookie) => {
    const [name, value] = cookie.split(";")[0].split("=");
    cookies().set({
      name,
      value,
      secure: true,
      httpOnly: true,
    });
  });
};

export default register;
