import DBConnect from "@/lib/db";
import User from "@/lib/models/User";
import { httpStatus, httpStatusText } from "@/utils/httpStatus";
import signJWT from "@/utils/signJWT";
import bcrypt from "bcrypt";
import { limiter } from "@/app/api/config/limiter";

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

  const { name, email, password, phone, address } = await req.json();
  if (!name || !email || !password || !phone || !address) {
    return Response.json(
      {
        status: httpStatusText.FAIL,
        data: { error: "All fields are required" },
      },
      { status: httpStatus.badRequest }
    );
  }
  DBConnect();
  try {
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return Response.json({ error: "Email already exists", status: 400 });
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hash,
      phone,
      address,
    });

    const token = await signJWT({ id: newUser._id, role: newUser.role });

    return Response.json(
      {
        data: { user: { name, email, phone, address }, token },
        status: httpStatusText.SUCCESS,
      },
      {
        status: httpStatus.created,
        headers: {
          "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; SameSite=strict; Max-Age=${
            Date.now() + 1000 * 60 * 60 * 24 * 7
          }`,
        },
      }
    );
  } catch (error: any) {
    console.log(error.message);
    return Response.json({
      status: httpStatusText.ERROR,
      data: {
        error: "Something went wrong",
      },
      message: error.message,
    });
  }
}
