"use server";

import { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IRegisterData } from "types/login.type";

import axiosInstance from "@lib/axiosInstance";

const register = async (credentials: IRegisterData) => {
  const res = await axiosInstance.post(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/register`,
    credentials,
  );

  setAuthCookie(res);
  redirect("/");
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
