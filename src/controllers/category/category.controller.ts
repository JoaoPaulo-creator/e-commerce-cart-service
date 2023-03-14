import { Request, Response } from "express";
import { prisma } from "../../lib/prisma-service";

class CategoryController {
  async save(req: Request, res: Response) {
    const { name } = req.body;

    const createCategory = await prisma.category.create({ data: { name } });

    return res.status(201).json(createCategory);
  }
}

export default new CategoryController();
