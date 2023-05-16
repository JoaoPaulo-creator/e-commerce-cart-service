import { Types } from 'mongoose'

export interface OrdersProps {
  user: {
    userId: Types.ObjectId
  }
  status: string
  createdAt: Date
  products: {
    product: Types.ObjectId
    quantity: number
  }[]
}

export interface IOrders {
  findAll(): Promise<OrdersProps[]>
  findById(orderId: string): Promise<OrdersProps>
  store(user: Object, products: Object[]): Promise<OrdersProps>
  delete(id: string): Promise<void>
  updateStatus(id: string, status: string): Promise<OrdersProps>
  updateQuantity(
    orderId: string,
    productArrayId: string,
    quantitiy: number,
  ): Promise<OrdersProps>
}
