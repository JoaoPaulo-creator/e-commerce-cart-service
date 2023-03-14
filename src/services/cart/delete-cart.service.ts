import { inject, injectable } from "tsyringe";
import CartRepository from "../../repository/cart-repository";

@injectable()
export default class DeleteCartService {
  constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

  async deleteById(id: string) {
    const cartId = await this.cartRepository.findById(id);

    if (!cartId) {
      throw new Error(`Cart id not found`);
    }

    const deleteCart = await this.cartRepository.delete(id);
    return deleteCart;
  }
}
