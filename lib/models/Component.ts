import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ["east", "west"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Component =
  mongoose.models.Component || mongoose.model("Component", componentSchema);
export default Component;
export { componentSchema };
