import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import { CreateCartService } from "../../services/cart/create-cart.service";

@autoInjectable()
export default class CreateCartController {
  constructor(
    @inject(CreateCartService) private createCartService: CreateCartService
  ) {}

  async store(req: Request, res: Response) {
    const { orderId } = req.body;

    return await this.createCartService
      .creatCartItems(orderId)
      .then((response) => {
        return res.status(201).json(response);
      })
      .catch((error) => {
        return res.status(400).json({ message: error.message });
      });
  }
}
