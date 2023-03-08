import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const payLoadProps = z.object({
  productDescription: z.string(),
  productPrice: z.number(),
  productName: z.string(),
});

export interface Test {
  productDescription: string;
  productName: string;
  productPrice: number;
}

const prisma = new PrismaClient();

export class CreateCartService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  //
  // productDescription: string, productName: string, productPrice: number

  async create({ productDescription, productName, productPrice }: Test) {
    /* return await this.cartRepository.createCart(
      productName,
      productDescription,2
      productPrice
    ); */

    return await this.prisma.cart.create({
      data: {
        product_description: productDescription,
        produt_name: productName,
        product_price: productPrice,
      },
    });
  }
}
