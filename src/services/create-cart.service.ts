import { inject, injectable } from "tsyringe";
import CartRepository from "../repository/cart-repository";

@injectable()
export class CreateCartService {
  constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

  async creatCartItems(
    productName: string,
    productDescription: string,
    productPrice: number
  ) {
    return await this.cartRepository.create(
      productName,
      productDescription,
      productPrice
    );
  }
}
