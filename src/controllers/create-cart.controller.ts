import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import { CreateCartService } from "../services/create-cart.service";

@autoInjectable()
export default class CreateCartController {
  constructor(
    @inject(CreateCartService) private createCartService: CreateCartService
  ) {}

  async store(req: Request, res: Response) {
    const { productName, productDescription, productPrice } = req.body;

    const cartItems = await this.createCartService.creatCartItems(
      productName,
      productDescription,
      productPrice
    );

    return res.status(201).json(cartItems);
  }
}
