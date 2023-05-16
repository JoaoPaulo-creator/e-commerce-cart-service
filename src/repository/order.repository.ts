import { orderModel } from '../models/order.model'
import { IOrders, OrdersProps } from './interfaces/order'

export default class OrderRepository implements IOrders {
  async store(user: Object, products: Object[]): Promise<OrdersProps> {
    const createOrder = await orderModel.create({
      user,
      products,
    })
    return createOrder
  }

  async findAll(): Promise<OrdersProps[]> {
    const orders = await orderModel
      .find()
      .populate(['products.product', 'user.userId'])
      .lean()
    return orders
  }

  async findById(orderId: string): Promise<OrdersProps> {
    const orders = await orderModel
      .findById(orderId)
      .populate(['products.product', 'user.userId'])
      .lean()
    return orders
  }

  async delete(id: string) {
    await orderModel.findByIdAndDelete(id)
  }

  async updateStatus(id: string, status: string): Promise<OrdersProps> {
    const orderStatus = await orderModel
      .findByIdAndUpdate(id, { status })
      .lean()
    return orderStatus
  }

  // This methods is used to update the quantity of an specific item on the cart
  async updateQuantity(
    orderId: string,
    productArrayId: string,
    quantitiy: number,
  ): Promise<OrdersProps> {
    const order = await orderModel
      .findOneAndUpdate(
        { _id: orderId, 'products._id': productArrayId },
        { $set: { 'products.$.quantity': quantitiy } },
        { new: true },
      )
      .lean()
    return order
  }
}
