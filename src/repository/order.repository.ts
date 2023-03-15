import { injectable } from "tsyringe";
import { prisma } from "../lib/prisma-service";

@injectable()
export default class OrderRepository {
  async store(
    status: string,
    price: number,
    description: string,
    quantity: number,
    title: string,
    categoryId: string
  ) {
    const createOrder = await prisma.order.create({
      data: {
        status,
        products: {
          create: {
            price,
            description,
            quantity,
            title,
            categoryId,
          },
        },
      },
      select: {
        id: true,
        products: true,
      },
    });
    return createOrder;
  }

  async findAll() {
    const orders = await prisma.order.findMany({
      select: {
        id: true,
        status: true,
        products: {
          select: {
            id: true,
            category: {
              select: {
                id: true,
                name: true,
              },
            },
            description: true,
            price: true,
            title: true,
            quantity: true,
            updatedAt: false,
          },
        },
      },
    });
    return orders;
  }

  async delete(id: string) {
    const deleterOrder = await prisma.order.delete({ where: { id } });
    return deleterOrder;
  }
}
