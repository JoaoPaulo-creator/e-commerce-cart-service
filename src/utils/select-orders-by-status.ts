import { OrdersProps } from "../repository/interfaces/order";

export function selectOrdersByStatus(orders: OrdersProps[], status?: string) {
  const filteredOrders = orders.filter((order) => order.status === status);
  return filteredOrders;
}
