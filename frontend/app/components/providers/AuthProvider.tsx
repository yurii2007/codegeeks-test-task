"use client";

import React, { createContext, useContext } from "react";
import { useLocalStorage } from "react-use";
import { IUser } from "types/user.type";

import axiosInstance from "@lib/axiosInstance";

interface IAuthContext {
  user: IUser | null | undefined;
  setUser: (user: IUser | null) => void;
  setAccessToken: (token: string) => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
  setAccessToken: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage<IUser | null | undefined>(
    "currentUser",
    null,
  );
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");

  return (
    <AuthContext.Provider value={{ user, setUser, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
