import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export class CartRepository {
  async createCart(
    productName: string,
    productDescription: string,
    productPrice: number
  ) {}

  async create(
    productDescription: string,
    productName: string,
    productPrice: number
  ) {
    return await prismaClient.cart.create({
      data: {
        product_description: productDescription,
        produt_name: productName,
        product_price: productPrice,
      },
    });
  }
}
