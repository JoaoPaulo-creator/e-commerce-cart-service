import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import OrderService from "../../services/order/order.service";

@autoInjectable()
export default class OrderController {
  constructor(@inject(OrderService) private orderService: OrderService) {}

  async createOrder(req: Request, res: Response) {
    const { status, products } = req.body;

    const price = products.price;
    const description = products.description;
    const quantity = products.quantity;
    const title = products.title;
    const categoryId = products.categoryId;

    return await this.orderService
      .createOrder(status, price, description, quantity, title, categoryId)
      .then((response) => {
        return res.status(201).json(response);
      })
      .catch((error) => {
        return res.status(404).json({ error: error.message });
      });
  }

  async getOrders(req: Request, res: Response) {
    return await this.orderService
      .findOrders()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => res.status(200).json({ message: error.message }));
  }

  async updateOrder(req: Request, res: Response) {
    const { id } = req.body;
  }
}
