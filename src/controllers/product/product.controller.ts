import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import ProductRepository from "../../repository/product.repository";

@autoInjectable()
export default class ProductController {
  constructor(
    @inject(ProductRepository) private productRepo: ProductRepository
  ) {}

  async createProduct(req: Request, res: Response) {
    const { description, price, title, categoryId } = req.body;

    return await this.productRepo
      .store(price, title, description, categoryId)
      .then((response) => {
        return res.status(201).json(response);
      })
      .catch((error) => {
        return res.status(400).json({ error: error.message });
      });
  }

  async getProducts(req: Request, res: Response) {
    const products = await this.productRepo.findAll();
    return res.status(200).json(products);
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    return await this.productRepo.delete(id).then(() => res.sendStatus(204));
  }
}
