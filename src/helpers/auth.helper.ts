"use server";

import { cookies } from "next/headers";

export const createAuthCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.set("userAuth", "myToken", { secure: true });
};

export const getAuthCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("userAuth");
};

export const deleteAuthCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("userAuth");
};
