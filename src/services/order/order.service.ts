import { IOrders, OrdersProps } from '../../repository/interfaces/order'
import { IOrderService } from '../contracts/iorder.service'

export default class OrderService implements IOrderService {
  private orderRepository: IOrders

  constructor(orderRepository: IOrders) {
    this.orderRepository = orderRepository
  }

  async createOrder(user: Object, products: Object[]) {
    if (!products || products.length === 0) {
      throw Error('At least one product must be informed')
    }

    const createOrder = await this.orderRepository.store(user, products)
    return createOrder
  }

  private selectOrdersByStatus(orders: OrdersProps[], status?: string) {
    const filteredOrders = orders.filter((order) => order.status === status)
    return filteredOrders
  }

  async findOrders(querieValue: string): Promise<OrdersProps[] | undefined> {
    const orders = await this.orderRepository.findAll()
    const querieValueToUpperCase = querieValue?.toUpperCase()
    const filteredOrders = this.selectOrdersByStatus(
      orders,
      querieValueToUpperCase,
    )
    const statusList = ['IN_PREPARATION', 'ON_THE_WAY', 'DONE', 'CANCELLED']

    if (!statusList.includes(querieValueToUpperCase)) {
      return orders
    }

    if (querieValueToUpperCase === undefined) {
      return orders
    }

    if (statusList.includes(querieValueToUpperCase)) {
      return filteredOrders
    }
  }

  async findOrderById(orderId: string) {
    const order = await this.orderRepository.findById(orderId)
    if (!order) {
      throw Error('Order not found')
    }
    return order
  }

  async deleteOrder(orderId: string) {
    const orderExists = await this.orderRepository.findById(orderId)
    if (!orderExists) {
      throw Error('Order id not found')
    }
    const order = await this.orderRepository.delete(orderId)
    return order
  }

  async updateOrderStatus(orderId: string, status: string) {
    const order = await this.orderRepository.findById(orderId)
    const statusList = ['IN_PREPARATION', 'ON_THE_WAY', 'DONE', 'CANCELLED']

    if (!order) {
      throw new Error('Id not found')
    }

    if (!statusList.includes(status)) {
      throw new Error('Invalid status')
    }

    const updateStatus = await this.orderRepository.updateStatus(
      orderId,
      status,
    )
    return updateStatus
  }

  async updateOrderQuantity(
    orderId: string,
    productId: string,
    quantity: number,
  ) {
    const order = await this.orderRepository.findById(orderId)

    if (!order) {
      throw new Error('Id not found')
    }

    if (!order.status.includes('IN_PREPARATION')) {
      throw new Error(
        "Is not possible to update this order. Maye this orders was cancelled or is on it's way to customer",
      )
    }

    const updateQuantity = await this.orderRepository.updateQuantity(
      orderId,
      productId,
      quantity,
    )
    return updateQuantity
  }
}
