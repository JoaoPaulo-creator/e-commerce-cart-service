import { IOrders } from "../../repository/interfaces/order";

// TODO: fix return type
export interface IOrderService {
  createOrder(products: Object[]): any;
  findOrders(): any;
  findOrderById(orderId: string): any;
  deleteOrder(orderId: string): any;
  updateOrderStatus(orderId: string, status: string): any;
  updateOrderQuantity(
    orderId: string,
    productId: string,
    quantity: number
  ): any;
}

export default class OrderService implements IOrderService {
  private orderRepository: IOrders;

  constructor(orderRepository: IOrders) {
    this.orderRepository = orderRepository;
  }

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

    const filteredOrders = orders.filter(
      (order) => !order.status.includes("CANCELLED")
    );
    console.log("Orders from orders list:", orders.length);
    console.log("Filtered orders:", filteredOrders.length);
    return filteredOrders;
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
    const statusList = ["IN_PREPARATION", "ON_THE_WAY", "DONE", "CANCELLED"];

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
    productId: string,
    quantity: number
  ) {
    const order = await this.orderRepository.findById(orderId);
    const statusList = ["IN_PREPARATION", "ON_THE_WAY", "DONE", "CANCELLED"];

    if (!order) {
      throw new Error("Id not found");
    }

    if (!order.status.includes("IN_PREPARATION")) {
      throw new Error(
        "Is not possible to update this order. Maye this orders was cancelled or is on it's way to customer"
      );
    }

    const updateQuantity = await this.orderRepository.updateQuantity(
      orderId,
      productId,
      quantity
    );
    return updateQuantity;
  }
}
