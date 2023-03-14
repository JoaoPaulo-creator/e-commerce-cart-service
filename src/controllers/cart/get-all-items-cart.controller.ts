import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import { FindAllCartItemsService } from "../../services/cart/find-all-cart-items.service";

@autoInjectable()
export default class GetAllItemsCartController {
  constructor(
    @inject(FindAllCartItemsService)
    private findAllItems: FindAllCartItemsService
  ) {}

  async findAll(req: Request, res: Response) {
    await this.findAllItems
      .getAllItems()
      .then((response) => {
        const { cart }: any = JSON.stringify(response);
        return res.status(200).json(cart);
      })
      .catch((error) => {
        const { message } = error;
        return res.status(200).json({ message });
      });
  }
}
