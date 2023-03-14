import { injectable } from "tsyringe";
import { prisma } from "../../lib/prisma-service";

@injectable()
export default class OrderRepository {
  async store(quantity: number, productId: string) {
    const createOrder = await prisma.order.create({
      data: {
        quantity,
        productId,
      },
      select: {
        id: true,
        product: true,
        quantity: true,
        productId: true,
      },
    });
    return createOrder;
  }
}
