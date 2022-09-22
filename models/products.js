import mongoose from "mongoose";
//product Schema
const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: [true, "Product present"],
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
