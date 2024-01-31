import mongoose from "mongoose";

function DBConnect() {
  mongoose
    .connect(process.env.DB_URI!)
    .catch((error: any) => console.log(error.message));
}

export default DBConnect;
