import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import UpdateCartService from "../../services/update-cart.service";

@autoInjectable()
export default class UpdateCartController {
  constructor(
    @inject(UpdateCartService) private updateCartService: UpdateCartService
  ) {}

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { quantity, price } = req.body;

    await this.updateCartService
      .updateCart(id, quantity, price)
      .then((response) => res.status(200).json({ ...response }))
      .catch((error) => {
        const { message } = error;
        return res.status(400).json({ message });
      });
  }
}
