import { OrdersProps } from '../../repository/interfaces/order'

export interface IOrderService {
  createOrder(user: Object, products: Object[]): Promise<OrdersProps>
  findOrders(querie?: string): Promise<OrdersProps[] | undefined>
  findOrderById(orderId: string): Promise<OrdersProps>
  deleteOrder(orderId: string): Promise<void>
  updateOrderStatus(orderId: string, status: string): Promise<OrdersProps>
  updateOrderQuantity(
    orderId: string,
    productId: string,
    quantity: number,
  ): Promise<OrdersProps>
}