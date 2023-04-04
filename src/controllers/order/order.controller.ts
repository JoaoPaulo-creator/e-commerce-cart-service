import { Request, Response } from "express";
import OrderService, {
  IOrderService,
} from "../../services/order/order.service";

export default class OrderController {
  private orderService: IOrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  async createOrder(req: Request, res: Response) {
    const { products } = req.body;

    return await this.orderService
      .createOrder(products)
      .then((response: any) => {
        return res.status(201).json(response);
      })
      .catch((error: { message: any }) => {
        return res.status(404).json({ error: error.message });
      });
  }

  async getOrders(req: Request, res: Response) {
    return await this.orderService
      .findOrders()
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
    const { products } = req.body;

    return await this.orderService
      .updateOrderStatus(id, products[0].status)
      .then(() => res.sendStatus(204))
      .catch((error: { message: any }) => {
        return res.status(400).json({ error: error.message });
      });
  }

  async updateOrderQuantity(req: Request, res: Response) {
    const { id } = req.params;
    const { products, status } = req.body;
    const productId = products[0]._id;
    const quantity = products[0].quantity;

    return await this.orderService
      .updateOrderQuantity(id, status, productId, quantity)
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
      .then((response: any) => {
        return res.sendStatus(204); // aparently, sendStatus() it's needed when using mongoDB
      })
      .catch((error: { message: any }) => {
        return res.status(404).json({ error: error.message });
      });
  }
}
