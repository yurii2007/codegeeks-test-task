"use client";

import React, { createContext, useContext, useState } from "react";
import { IUser } from "types/user.type";

interface IAuthContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
