import { inject, injectable } from "tsyringe";
import OrderRepository from "../../repository/order.repository";
import productRepository from "../../repository/product.repository";

@injectable()
export default class OrderService {
  constructor(
    @inject(OrderRepository) private orderRepository: OrderRepository,
    @inject(productRepository) private productRepo: productRepository
  ) {}

  async createOrder(products: Object[]) {
    if (!products || products.length === 0) {
      throw Error("At least one product must be informed");
    }

    const createOrder = await this.orderRepository.store(products);
    return createOrder;
  }

  async findOrders() {
    const orders = await this.orderRepository.findAll();
    if (orders.length === 0) {
      throw new Error("Your cart is impty");
    }

    return orders;
  }

  async findOrderById(orderId: string) {
    const order = await this.orderRepository.findById(orderId);
    if (!order) {
      throw Error("Order not found");
    }
    return order;
  }

  async deleteOrder(orderId: string) {
    const orderExists = await this.orderRepository.findById(orderId);
    if (!orderExists) {
      throw Error("Order id not found");
    }
    const order = await this.orderRepository.delete(orderId);
    return order;
  }

  async updateOrderStatus(orderId: string, status: string) {
    const order = await this.orderRepository.findById(orderId);
    const statusList = ["IN_PREPARATION", "ON_THE_WAY", "DONE"];

    if (!order) {
      throw new Error("Id not found");
    }

    if (!statusList.includes(status)) {
      throw new Error("Invalid status");
    }

    const updateStatus = await this.orderRepository.updateStatus(
      orderId,
      status
    );
    return updateStatus;
  }

  async updateOrderQuantity(
    orderId: string,
    status: string,
    productId: string,
    quantity: number
  ) {
    const order = await this.orderRepository.findById(orderId);
    const statusList = ["IN_PREPARATION", "ON_THE_WAY", "DONE"];

    if (!order) {
      throw new Error("Id not found");
    }

    if (!statusList.includes(status)) {
      throw new Error("Invalid status");
    }

    const updateQuantity = await this.orderRepository.updateQuantity(
      orderId,
      productId,
      quantity
    );
    return updateQuantity;
  }
}
