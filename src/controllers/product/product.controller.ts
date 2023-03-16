import { Request, Response } from "express";
import ProductRepository from "../../repository/product.repository";

class ProductController {
  async createProduct(req: Request, res: Response) {
    const { description, price, title, categoryId } = req.body;

    return await ProductRepository.store(price, title, description, categoryId)
      .then((response) => {
        return res.status(201).json(response);
      })
      .catch((error) => {
        return res.status(400).json({ error: error.message });
      });
  }

  async getProducts(req: Request, res: Response) {
    const products = await ProductRepository.findAll();
    return res.status(200).json(products);
  }
}

export default new ProductController();
