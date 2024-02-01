import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function handleLogout(router: AppRouterInstance) {
  await fetch("/api/auth/logout", {
    cache: "no-store",
  });
  router.refresh();
}
