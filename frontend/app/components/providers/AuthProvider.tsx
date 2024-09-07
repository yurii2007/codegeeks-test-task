"use client";

import React, { createContext, useContext } from "react";
import { useLocalStorage } from "react-use";
import { IUser } from "types/user.type";

interface IAuthContext {
  user: IUser | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | null | undefined>>;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage<IUser | null | undefined>(
    "currentUser",
    null,
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
