import { useAuthContext } from "app/components/providers/AuthProvider";
import { useCallback } from "react";
import authService from "services/auth.service";
import { ILoginData } from "types/login.type";

export const useAuth = () => {
  const { user, setUser } = useAuthContext();

  const login = useCallback(
    async (credentials: ILoginData) => {
      try {
        const data = await authService.login(credentials);
        setUser(data);
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
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    },
    [setUser],
  );

  return { login, register };
};
