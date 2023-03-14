import { inject, injectable } from "tsyringe";
import CartRepository from "../../repository/cart-repository";

@injectable()
export class FindAllCartItemsService {
  constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

  async getAllItems() {
    const cartItems = await this.cartRepository.findAll();
    return cartItems;
  }
}
