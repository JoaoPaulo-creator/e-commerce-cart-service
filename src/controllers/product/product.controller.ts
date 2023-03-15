import { Request, Response } from "express";
import ProductRepository from "../../repository/product.repository";

class ProductController {
  async createProduct(req: Request, res: Response) {
    const { quantity, description, price, title, categoryId } = req.body;

    const createProduct = await ProductRepository.store(
      price,
      quantity,
      title,
      description,
      categoryId
    );

    return res.status(201).json(createProduct);
  }

  async getProducts(req: Request, res: Response) {
    const products = await ProductRepository.findAll();
    return res.status(200).json(products);
  }
}

export default new ProductController();
