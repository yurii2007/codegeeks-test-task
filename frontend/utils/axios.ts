import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL ?? "",
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
