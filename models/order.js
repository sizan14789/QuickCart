import mongoose from "mongoose"

const orderSchema = mongoose.Schema(
  {
    productId: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  }
)

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;