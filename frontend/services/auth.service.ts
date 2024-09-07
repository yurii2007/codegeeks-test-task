import { AxiosResponse } from "axios";
import { ILoginData, ILoginResponse, IRegisterData } from "types/login.type";

import axiosInstance from "@lib/axiosInstance";

class AuthService {
  constructor() {}

  async login(userData: ILoginData) {
    const { data }: AxiosResponse<ILoginResponse> = await axiosInstance.post(
      "/auth/login",
      userData,
    );

    return data;
  }

  async register(registerData: IRegisterData) {
    const { data }: AxiosResponse<ILoginResponse> = await axiosInstance.post(
      "/auth/register",
      registerData,
    );

    return data;
  }
}

export default new AuthService();
