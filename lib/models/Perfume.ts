import mongoose from "mongoose";
import { componentSchema } from "@/lib/models/Component";

const perfumeSchema = new mongoose.Schema({
  for: {
    type: String,
    enum: ["male", "female", "both"],
    required: true,
    default: "both",
  },
  components: [
    {
      type: componentSchema,
      default: [],
    },
  ],
});

const Perfume =
  mongoose.models.Perfume || mongoose.model("Perfume", perfumeSchema);
export default Perfume;
export { perfumeSchema };
