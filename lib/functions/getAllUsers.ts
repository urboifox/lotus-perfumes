import { HOST } from "@/utils/constants";

export async function getAllUsers() {
  const res = await fetch(`${HOST}/api/users`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return await res.json();
}
