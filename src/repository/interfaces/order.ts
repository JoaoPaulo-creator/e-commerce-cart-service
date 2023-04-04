export interface IOrders {
  findAll();
  findById(orderId: string);
  store(products: Object[]);
  delete(id: string);
  updateStatus(id: string, status: string);
  updateQuantity(orderId: string, productArrayId: string, quantitiy: number);
}
