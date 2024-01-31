import { httpStatus, httpStatusText } from "@/utils/httpStatus";
import verifyJWT from "@/utils/verifyJWT";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const cookies = req.cookies;
  const token = cookies.get("token");

  if (!token) {
    return Response.json(
      { status: httpStatusText.FAIL, data: { error: "No Token Provided" } },
      { status: httpStatus.unauthorized }
    );
  }

  try {
    const validToken = await verifyJWT(token.value);
    return Response.json({
      status: httpStatusText.SUCCESS,
      data: { user: validToken.payload },
    });
  } catch (error: any) {
    return Response.json({
      status: httpStatusText.FAIL,
      data: { error: error.message },
    });
  }
}
