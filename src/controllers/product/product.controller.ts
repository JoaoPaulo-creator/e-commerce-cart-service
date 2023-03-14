import { Request, Response } from "express";
import ProductRepository from "../../repository/product.repository";
class ProductController {
  async createProduct(req: Request, res: Response) {
    const { description, price, title, categoryId } = req.body;

    const createProduct = await ProductRepository.store(
      price,
      title,
      description,
      categoryId
    );

    return res.status(201).json(createProduct);
  }
}

export default new ProductController();
