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
        console.log({ ...response, product });
        return res
          .status(201)
          .json({ ...response, product, totalPrice: quantity * product.price });
      })
      .catch((error) => {
        const { message } = error;
        return res.status(400).json({ message });
      });
  }
}
