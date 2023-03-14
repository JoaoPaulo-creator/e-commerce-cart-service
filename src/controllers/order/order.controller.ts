import { Request, Response } from "express";
import { prisma } from "../../lib/prisma-service";

class OrderController {
  async createOrder(req: Request, res: Response) {
    const { productId } = req.body;
    const createOrder = await prisma.order.create({
      data: {
        productId,
      },
    });

    return res.status(201).json({ ...createOrder, productId });
  }
}

export default new OrderController();
