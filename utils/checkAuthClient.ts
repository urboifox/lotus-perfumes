import { HOST } from "./constants";

export async function checkAuthClient() {
  const response = await fetch(`${HOST}/api/auth`, {
    cache: "no-store",
  });

  const json = await response.json();
  const user = json.status === "success" ? json.data.user : null;
  return user;
}
