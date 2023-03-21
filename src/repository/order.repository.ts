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
          orderDate: 1, // 1: ASCENDING | -1: DESCENDING
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
    const filter = { id: id };
    const query = { status: status };

    const orderStatus = await orderModel.findByIdAndUpdate(id, { status });
    return orderStatus;
  }

  // This methods is used to update the quantity of specific item on the cart
  async updateQuantity(
    orderId: string,
    productArrayId: string,
    quantitiy: number
  ) {
    /*
      this is the payload used on this example
      {
          "status": "IN_PREPARATION",
          "products": [
            {
              "product": "641275570285dc98252a1a2c",
              "quantity": 123123,
              "_id": "64190bd2267df0ccfeec043b"
            }
          ]
      }
    */

    const order = await orderModel.findOneAndUpdate(
      { _id: orderId, "products._id": productArrayId },
      { $set: { "products.$.quantity": quantitiy } },
      { new: true }
    );
    return order;
  }
}
