import { Request, Response } from "express";
import { prisma } from "../../lib/prisma-service";

class ProductController {
  async createProduct(req: Request, res: Response) {
    const { description, price, title, quantity, categoryId } = req.body;

    const createProduct = await prisma.product.create({
      data: {
        description,
        price,
        title,
        quantity,
        categoryId,
      },
    });

    return res.status(201).json({ ...createProduct, categoryId });
  }
}

export default new ProductController();
