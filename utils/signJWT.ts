import * as jose from "jose";
export default async function signJWT(
  payload: jose.JWTPayload
): Promise<string> {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
  const token = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime("15d")
    .sign(secret);
  return token;
}
