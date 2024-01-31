import { NextRequest } from "next/server";

export default function isRouteInside(request: NextRequest, routes: string[]) {
  let routeMatched = false;
  routes.forEach((route) => {
    const isRouteIncluded = request.nextUrl.pathname.startsWith(route);
    if (isRouteIncluded) {
      routeMatched = true;
    }
  });
  return routeMatched;
}
