import { model, Schema } from "mongoose";

export const orderModel = model(
  "order",
  new Schema({
    status: {
      type: String,
      enum: ["IN_PREPARATION", "ON_THE_WAY", "DONE"],
      default: "IN_PREPARATION",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      required: true,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "product",
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  })
);
