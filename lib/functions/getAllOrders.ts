import { HOST } from "@/utils/constants";

export async function getAllOrders() {
  const res = await fetch(`${HOST}/api/orders`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  return await res.json();
}
