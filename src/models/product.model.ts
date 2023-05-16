import { model, Schema } from 'mongoose'

export const productModel = model(
  'product',
  new Schema({
    unitPrice: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    categoryId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'product_category',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }),
)
