import { inject, injectable } from "tsyringe";
import CartRepository from "../repository/cart-repository";

@injectable()
export class FindAllCartItemsService {
  constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

  // TODO: refactor this code
  async getAllItems() {
    const cartItems = await this.cartRepository.findAll();

    if (cartItems.length === 0) {
      throw new Error("Cart is empty");
    }

    return cartItems;
  }
}
