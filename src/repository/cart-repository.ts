import { PrismaClient } from "@prisma/client";
import { injectable } from "tsyringe";

const prismaClient = new PrismaClient();

@injectable()
export default class CartRepository {
  async findAll() {
    const cart = await prismaClient.cart.findMany();
    return cart;
  }

  async create(
    productName: string,
    productDescription: string,
    productPrice: number
  ) {
    const cart = await prismaClient.cart.create({
      data: {
        produt_name: productName,
        product_description: productDescription,
        product_price: productPrice,
      },
    });
    return cart;
  }
}
