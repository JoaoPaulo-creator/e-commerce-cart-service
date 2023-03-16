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
    const orders = await orderModel.aggregate([
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
    ]);

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
}
