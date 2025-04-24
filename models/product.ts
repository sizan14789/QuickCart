import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  info: {
    brand: String,
    color: String,
    category: {
      type: String,
      required: true
    }
  },
  username: {
    type: String
  }
}, {
  timestamps: true
});

const Product = models.Product || mongoose.model('Product' ,productSchema)

export default Product
