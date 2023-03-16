import { model, Schema } from "mongoose";
export const categoryModel = model(
  "product_category",
  new Schema({
    name: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);
