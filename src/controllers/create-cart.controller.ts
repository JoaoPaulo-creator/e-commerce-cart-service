import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import { CreateCartService } from "../services/create-cart.service";

@autoInjectable()
export default class CreateCartController {
  constructor(
    @inject(CreateCartService) private createCartService: CreateCartService
  ) {}

  async store(req: Request, res: Response) {
    const { product, quantity } = req.body;

    await this.createCartService
      .creatCartItems({
        product,
        quantity,
      })
      .then((response) => {
        return res.status(201).json({ ...response, product });
      })
      .catch((error) => {
        const { message } = error;
        return res.status(400).json({ message });
      });
  }
}
