export function selectOrdersByStatus(orders?: any[], status?: string) {
  const filteredOrders = orders?.filter((order) => order.status === status);
  return filteredOrders;
}
