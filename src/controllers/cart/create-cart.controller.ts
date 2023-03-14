import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import { prisma } from "../../lib/prisma-service";
import { CreateCartService } from "../../services/cart/create-cart.service";

@autoInjectable()
export default class CreateCartController {
  constructor(
    @inject(CreateCartService) private createCartService: CreateCartService
  ) {}

  async store(req: Request, res: Response) {
    const { orderId } = req.body;

    const createCart = await prisma.cart.create({
      data: {
        orderId,
      },
    });

    return res.status(201).json({ ...createCart, orderId });
  }
}
