import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import OrderRepository from "../../services/order/order.repository";

@autoInjectable()
export default class OrderController {
  constructor(@inject(OrderRepository) private orderRepo: OrderRepository) {}

  async createOrder(req: Request, res: Response) {
    const { quantity, productId } = req.body;
    const createOrder = await this.orderRepo.store(quantity, productId);

    return res.status(201).json(createOrder);
  }
}
