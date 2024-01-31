import { NextRequest } from "next/server";
import verifyJWT from "./verifyJWT";
import * as jose from "jose";
export async function checkAuthMiddleware(request: NextRequest) {
  const token = request.cookies.get("token");
  let loggedIn = false;
  let role = "user";
  if (token) {
    try {
      const valid = await verifyJWT(token.value as string);
      if (valid) loggedIn = true;
      else loggedIn = false;

      if (loggedIn) {
        const decodedJWT: jose.JWTPayload = jose.decodeJwt(
          token.value as string
        );
        role = (decodedJWT.role as string) || "user";
      }
    } catch (error: any) {
      console.log(error);
      loggedIn = false;
    }
  }
  return { loggedIn, role };
}
