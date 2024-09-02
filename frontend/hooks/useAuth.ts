import { useAuthContext } from "app/components/providers/AuthProvider";
import { useCallback } from "react";
import authService from "services/auth.service";
import { ILoginData } from "types/login.type";

export const useAuth = () => {
  const { setUser, setAccessToken } = useAuthContext();

  const login = useCallback(
    async (credentials: ILoginData) => {
      try {
        const data = await authService.login(credentials);
        setUser(data.user);
        setAccessToken(data.accessToken);
      } catch (error) {
        console.log(error);
      }
    },
    [setUser],
  );

  const register = useCallback(
    async (credentials: ILoginData) => {
      try {
        const data = await authService.register(credentials);
        setUser(data.user);
        setAccessToken(data.accessToken);
      } catch (error) {
        console.log(error);
      }
    },
    [setUser],
  );

  const logout = useCallback(() => setUser(null), [setUser]);

  return { login, register, logout };
};
