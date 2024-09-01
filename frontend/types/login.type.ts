import { IUser } from "./user.type";

export interface ILoginData {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  user: IUser;
}

export interface IRegisterData extends ILoginData {}

export interface IRegisterResponse extends ILoginResponse {}
