import { orderModel } from "../models/order.model";
import { IOrders } from "./interfaces/order";

export default class OrderRepository implements IOrders {
  async store(products: Object[]) {
    const createOrder = await orderModel.create({
      products,
    });
    return createOrder;
  }

  async findAll() {
    const orders = await orderModel.find().populate("products.product");
    return orders;
  }

  async findById(orderId: string) {
    const orders = await orderModel
      .findById(orderId)
      .populate("products.product");
    return orders;
  }

  async delete(id: string) {
    const deleterOrder = await orderModel.findByIdAndDelete(id);
    return deleterOrder;
  }

  async updateStatus(id: string, status: string) {
    const orderStatus = await orderModel.findByIdAndUpdate(id, { status });
    return orderStatus;
  }

  // This methods is used to update the quantity of an specific item on the cart
  async updateQuantity(
    orderId: string,
    productArrayId: string,
    quantitiy: number
  ) {
    const order = await orderModel.findOneAndUpdate(
      { _id: orderId, "products._id": productArrayId },
      { $set: { "products.$.quantity": quantitiy } },
      { new: true }
    );
    return order;
  }
}
