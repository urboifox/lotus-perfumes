import * as jose from "jose";

export default async function verifyJWT(
  payload: string
): Promise<jose.JWTVerifyResult<jose.JWTPayload>> {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
  const jwt = await jose.jwtVerify(payload, secret);
  return jwt;
}
