import DBConnect from "@/lib/db";
import Perfume from "@/lib/models/Perfume";
import { httpStatusText } from "@/utils/httpStatus";

export const GET = async () => {
  DBConnect();
  const perfumes = await Perfume.find({}, { __v: 0 });
  return Response.json({
    status: httpStatusText.SUCCESS,
    data: { perfumes },
  });
};
