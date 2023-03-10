import { inject, injectable } from "tsyringe";
import { CartItemsProps } from "../interfaces/cart-items-props";
import CartRepository from "../repository/cart-repository";

@injectable()
export class CreateCartService {
  constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

  async creatCartItems({ product, quantity }: CartItemsProps) {
    if (product.price < 0) {
      throw new Error("This item price is invalid. Please provide a valid one");
    }

    const productPrice = product.price;
    const productName = product.name;
    const productDescription = product.description;

    return await this.cartRepository.create(
      productPrice,
      productName,
      productDescription,
      quantity
    );
  }
}
