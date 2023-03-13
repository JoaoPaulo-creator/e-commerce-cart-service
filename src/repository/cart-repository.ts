import { injectable } from "tsyringe";
import { prisma } from "../lib/prisma-service";

@injectable()
export default class CartRepository {
  async findAll() {
    const cart = await prisma.cart.findMany({
      include: {
        product: true,
      },
    });
    return cart;
  }

  async findById(id: string) {
    const cartId = await prisma.cart.findUnique({ where: { id } });
    return cartId;
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
        total: quantity * price,
      },
    });
    return cart;
  }

  // TODO fix this
  async update(id: string, quantity: number, price: number) {
    const cart = await prisma.cart.update({
      where: {
        id,
      },
      data: {
        quantity,
        total: quantity * price,
      },
    });

    return cart;
  }

  async delete(id: string) {
    const cartId = await prisma.cart.delete({ where: { id: id } });
    return cartId;
  }
}
