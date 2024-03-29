import { HOST } from "@/utils/constants";

export async function getAllPerfumes() {
  const res = await fetch(`${HOST}/api/perfumes`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch perfumes");
  }

  return await res.json();
}
