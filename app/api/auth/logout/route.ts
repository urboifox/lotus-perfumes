import { httpStatusText } from "@/utils/httpStatus";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const cookies = req.cookies;
  cookies.delete("token");
  return Response.json(
    { status: httpStatusText.SUCCESS, data: null },
    {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
      },
    }
  );
}
