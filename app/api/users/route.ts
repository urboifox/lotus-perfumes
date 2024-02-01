import DBConnect from "@/lib/db";
import User from "@/lib/models/User";
import { httpStatus, httpStatusText } from "@/utils/httpStatus";

export async function GET() {
  DBConnect();
  try {
    const users = await User.find({}, { password: 0, __v: 0 });
    return Response.json(
      { data: users, status: httpStatusText.SUCCESS },
      { status: httpStatus.ok }
    );
  } catch (err: any) {
    return Response.json(
      { status: httpStatusText.FAIL, data: { error: err.message } },
      { status: httpStatus.badRequest }
    );
  }
}
