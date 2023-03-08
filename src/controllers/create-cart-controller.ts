import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { z } from "zod";

const payLoadProps = z.object({
  productDescription: z.string(),
  productPrice: z.number(),
  productName: z.string(),
});

const prisma = new PrismaClient();

export default class CreateCartController {
  async store(req: Request, res: Response) {
    const { productName, productDescription, productPrice } = req.body;

    console.log(productName, productDescription, productPrice);

    const createCart = await prisma.cart.create({
      data: {
        product_description: productDescription,
        produt_name: productName,
        product_price: productPrice,
      },
    });

    return res.status(201).json({ cart: createCart });
  }
}
