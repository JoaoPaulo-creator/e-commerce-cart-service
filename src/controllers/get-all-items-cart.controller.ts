import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import { FindAllCartItemsService } from "../services/find-all-cart-items.service";

@autoInjectable()
export default class GetAllItemsCartController {
  constructor(
    @inject(FindAllCartItemsService)
    private findAllItems: FindAllCartItemsService
  ) {}

  async findAll(req: Request, res: Response) {
    await this.findAllItems.getAllItems().then((response) => {
      return res.status(200).json(response);
    });
  }
}
