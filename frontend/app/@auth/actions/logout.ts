"use server";

import { cookies } from "next/headers";

const logout = () => {
  cookies().delete("jwt_token");
};

export default logout;
