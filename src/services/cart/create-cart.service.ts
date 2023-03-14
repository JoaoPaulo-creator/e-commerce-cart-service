import { inject, injectable } from "tsyringe";
import CartRepository from "../../repository/cart-repository";

@injectable()
export class CreateCartService {
  constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

  async creatCartItems(orderId: string) {
    const findOrderId = await this.cartRepository.findById(orderId);

    if (!findOrderId) {
      throw Error("Order id not found or was not created");
    }
    return await this.cartRepository.create(orderId);
  }
}
