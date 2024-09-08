import { AxiosResponse } from "axios";
import { cookies } from "next/headers";

const setCookies = (response: AxiosResponse<any>) => {
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

export default setCookies;
