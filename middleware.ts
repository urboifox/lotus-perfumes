import { NextResponse, NextRequest } from "next/server";
import isRouteInside from "@/utils/isRouteInside";
import { adminRoutes, needsLoginRoutes, needsLogoutRoutes } from "@/routes";
import { checkAuthMiddleware } from "./utils/checkAuthMiddleware";

export async function middleware(req: NextRequest) {
  const needsLogin = isRouteInside(req, needsLoginRoutes);
  const needsLogout = isRouteInside(req, needsLogoutRoutes);
  const needsAdmin = isRouteInside(req, adminRoutes);

  let { loggedIn, role }: { loggedIn: boolean; role: string } =
    await checkAuthMiddleware(req);
  const isAdmin = role === "admin" ? true : false;

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (needsLogin && !loggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (needsLogout && loggedIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (needsAdmin && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
