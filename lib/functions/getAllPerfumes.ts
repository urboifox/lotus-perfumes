import { HOST } from "@/utils/constants";

export async function getAllPerfumes() {
  const res = await fetch(`${HOST}/api/perfumes`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
