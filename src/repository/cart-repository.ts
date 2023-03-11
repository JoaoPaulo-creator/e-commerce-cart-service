import { injectable } from "tsyringe";
import { prisma } from "../lib/prisma-service";

@injectable()
export default class CartRepository {
  async findAll() {
    const cart = await prisma.cart.findMany();
    return cart;
  }

  async create(
    price: number,
    name: string,
    description: string,
    quantity: number,
    categoryId: string
  ) {
    const cart = await prisma.cart.create({
      data: {
        product: {
          create: {
            price: price,
            name: name,
            description: description,
            categoryId: categoryId,
          },
        },
        quantity: quantity,
      },
    });
    return cart;
  }
}
