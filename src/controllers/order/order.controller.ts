import { Request, Response } from "express";
import { z } from "zod";
import OrderService, {
  IOrderService,
} from "../../services/order/order.service";

const ParseQuerieToString = z.object({
  status: z.string().optional(),
});

export default class OrderController {
  private orderService: IOrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  async createOrder(req: Request, res: Response) {
    const { user, products } = req.body;

    return await this.orderService
      .createOrder(user, products)
      .then((response: any) => {
        return res.status(201).json(response);
      })
      .catch((error: { message: any }) => {
        return res.status(400).json({ error: error.message });
      });
  }

  async getOrders(req: Request, res: Response) {
    const { status } = ParseQuerieToString.parse(req.query);

    return await this.orderService
      .findOrders(status)
      .then((response: any) => {
        return res.status(200).json(response);
      })
      .catch((error: { message: any }) =>
        res.status(200).json({ message: error.message })
      );
  }

  async getOrderById(req: Request, res: Response) {
    const { id } = req.params;
    return await this.orderService
      .findOrderById(id)
      .then((response: any) => {
        return res.status(200).json(response);
      })
      .catch((error: { message: any }) => {
        return res.status(404).json({ message: error.message });
      });
  }

  async updateOrderStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    return await this.orderService
      .updateOrderStatus(id, status)
      .then(() => res.sendStatus(204))
      .catch((error: { message: any }) => {
        return res.status(400).json({ error: error.message });
      });
  }

  async updateOrderQuantity(req: Request, res: Response) {
    const { id } = req.params;
    const { products } = req.body;
    const productId = products[0]._id;
    const quantity = products[0].quantity;

    return await this.orderService
      .updateOrderQuantity(id, productId, quantity)
      .then((response: any) => {
        return res.status(200).json(response);
      })
      .catch((error: { message: any }) => {
        return res.status(400).json({ error: error.message });
      });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    return await this.orderService
      .deleteOrder(id)
      .then(() => {
        return res.sendStatus(204); // aparently, sendStatus() it's needed when using mongoDB
      })
      .catch((error: { message: any }) => {
        return res.status(404).json({ error: error.message });
      });
  }
}
