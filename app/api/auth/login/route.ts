import DBConnect from "@/lib/db";
import User from "@/lib/models/User";
import signJWT from "@/utils/signJWT";
import bcrypt from "bcrypt";
import { limiter } from "@/app/api/config/limiter";
import { httpStatus, httpStatusText } from "@/utils/httpStatus";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const remainingTokens = await limiter.removeTokens(1);

  if (remainingTokens < 0) {
    return Response.json(
      {
        data: {
          error: "Too many requests",
        },
        status: httpStatusText.FAIL,
      },
      {
        status: httpStatus.tooManyRequests,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json(
      {
        status: httpStatusText.FAIL,
        data: { error: "All fields are required" },
      },
      { status: httpStatus.badRequest }
    );
  }

  DBConnect();
  const user = await User.findOne({ email });
  if (!user) {
    return Response.json(
      {
        status: httpStatusText.FAIL,
        data: { error: "Invalid credentials" },
      },
      { status: httpStatus.badRequest }
    );
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return Response.json(
      {
        status: httpStatusText.FAIL,
        data: { error: "Invalid credentials" },
      },
      { status: httpStatus.badRequest }
    );
  }

  const token = await signJWT({ id: user._id, role: user.role });

  return Response.json(
    {
      status: httpStatusText.SUCCESS,
      data: {
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          favourites: user.favourites,
          role: user.role,
        },
        token,
      },
    },
    {
      status: httpStatus.ok,
      headers: {
        "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; SameSite=strict; Max-Age=${
          Date.now() + 1000 * 60 * 60 * 24 * 7 * 14
        }`,
      },
    }
  );
}
