import { cookies } from "next/headers";
import { HOST } from "./constants";

export async function checkAuth() {
  const response = await fetch(`${HOST}/api/auth`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    cache: "no-store",
  });

  const json = await response.json();
  const user = json.status === "success" ? json.data.user : null;
  return user;
}
