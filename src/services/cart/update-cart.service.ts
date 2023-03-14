import { inject, injectable } from "tsyringe";
import CartRepository from "../../repository/cart-repository";

@injectable()
export default class UpdateCartService {
  constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

  async updateCart(id: string, quantity: number, price: number) {
    const cartExists = await this.cartRepository.findById(id);

    if (!cartExists) {
      throw new Error("Cart not found");
    }

    const updateCart = await this.cartRepository.update(id, quantity, price);
    return updateCart;
  }
}
