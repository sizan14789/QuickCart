import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    cartItems: { type: Object, default: {} },
    orders: { type: Object, default: {} }
  },
  { minimize: false }
);

const User = models?.user || model("user", userSchema);

export default User;
