import { AxiosResponse } from "axios";
import { ILoginData, ILoginResponse, IRegisterData } from "types/login.type";

import { api } from "@utils/axios";

class AuthService {
  constructor() {}

  async login(userData: ILoginData) {
    const { data }: AxiosResponse<ILoginResponse> = await api.post(
      "/auth/login",
      userData,
    );

    return data;
  }

  async register(registerData: IRegisterData) {
    const { data }: AxiosResponse<ILoginResponse> = await api.post(
      "/auth/register",
      registerData,
    );

    return data;
  }
}

export default new AuthService();
