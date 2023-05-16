import { model, Schema } from 'mongoose'

export const userModel = model(
  'users',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }),
)
