import { injectable } from "tsyringe";
import { prisma } from "../lib/prisma-service";

@injectable()
export default class CartRepository {
  async findAll() {
    const cart = await prisma.cart.findMany();
    return cart;
  }

  async create(
    productName: string,
    productDescription: string,
    productPrice: number
  ) {
    const cart = await prisma.cart.create({
      data: {
        produt_name: productName,
        product_description: productDescription,
        product_price: productPrice,
      },
    });
    return cart;
  }
}
