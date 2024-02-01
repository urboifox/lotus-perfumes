import DBConnect from "@/lib/db";
import Order from "@/lib/models/Order";
import { httpStatus, httpStatusText } from "@/utils/httpStatus";

export async function GET() {
  DBConnect();
  try {
    const orders = await Order.find({}, { __v: 0 });
    return Response.json(
      { data: { orders }, status: httpStatusText.SUCCESS },
      { status: httpStatus.ok }
    );
  } catch (error: any) {
    return Response.json({
      data: { error: error.message },
      status: httpStatus.badRequest,
    });
  }
}
