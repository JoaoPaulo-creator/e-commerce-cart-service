import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import OrderService from "../../services/order/order.service";

@autoInjectable()
export default class OrderController {
  constructor(@inject(OrderService) private orderService: OrderService) {}

  async createOrder(req: Request, res: Response) {
    const { products } = req.body;

    return await this.orderService
      .createOrder(products)
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

  async getOrderById(req: Request, res: Response) {
    const { id } = req.params;
    return await this.orderService
      .findOrderById(id)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(404).json({ message: error.message });
      });
  }

  async updateOrder(req: Request, res: Response) {
    const { id } = req.params;
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    return await this.orderService
      .deleteOrder(id)
      .then((response) => {
        return res.sendStatus(204); // aparently, sendStatus() it's needed when using mongoDB
      })
      .catch((error) => {
        return res.status(404).json({ error: error.message });
      });
  }
}
