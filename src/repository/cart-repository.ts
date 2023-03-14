import { injectable } from "tsyringe";
import { prisma } from "../lib/prisma-service";

@injectable()
export default class CartRepository {
  async findAll() {
    const cart = await prisma.cart.findMany({
      select: {
        id: true,
        order: {
          select: {
            product: true,

            quantity: true,
          },
        },
      },
    });

    return cart;
  }

  async findById(id: string) {
    const cartId = await prisma.cart.findUnique({ where: { id } });
    return cartId;
  }

  async create(orderId: string) {
    const cart = await prisma.cart.create({
      data: {
        orderId,
      },
      select: {
        id: true,
        order: {
          select: { id: true, product: true, quantity: true, productId: true },
        },
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
