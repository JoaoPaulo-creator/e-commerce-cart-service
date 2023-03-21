import { injectable } from "tsyringe";
import { orderModel } from "../models/order.model";
@injectable()
export default class OrderRepository {
  async store(products: Object[]) {
    const createOrder = await orderModel.create({
      products,
    });
    return createOrder;
  }

  // TODO: Fix this
  async findAll() {
    /* const orders = await orderModel.aggregate([
      {
        $lookup: {
          from: "product",
          localField: "_id",
          foreignField: "_id",
          as: "productInfo",
        },
      },
      {
        $match: {
          _id: { $exists: true },
        },
      },
      {
        $project: {
          orderDate: 1,
          price: "$product.price",
          title: "$product.title",
        },
      },
    ]); */

    const orders = await orderModel.find();

    return orders;
  }

  async findById(orderId: string) {
    const orders = await orderModel.findById(orderId);
    return orders;
  }

  async delete(id: string) {
    const deleterOrder = await orderModel.findByIdAndDelete(id);
    return deleterOrder;
  }

  async updateStatus(id: string, status: string) {
    const orderStatus = await orderModel.updateOne({ id: id, status });
    return orderStatus;
  }

  async updateQuantity(orderId: string, quantity: number) {
    const order = await orderModel.findByIdAndUpdate(orderId, { quantity });
    return order;
  }
}
