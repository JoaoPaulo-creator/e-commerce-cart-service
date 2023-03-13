import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import DeleteCartService from "../../services/delete-cart.service";

@autoInjectable()
export default class DeleteCartController {
  constructor(
    @inject(DeleteCartService) private deleteCart: DeleteCartService
  ) {}

  async deleteCartById(req: Request, res: Response) {
    const { id } = req.params;

    return await this.deleteCart
      .deleteById(id)
      .then(() => {
        return res.sendStatus(204);
      })
      .catch((error) => {
        const { message } = error;
        return res.status(404).json({ message });
      });
  }
}
