import { injectable } from "tsyringe";
import { productModel } from "../models/product.model";

@injectable()
export default class ProductRepository {
  async store(
    price: number,
    title: string,
    description: string,
    categoryId: string
  ) {
    const createProduct = await productModel.create({
      price,
      title,
      description,
      categoryId,
    });
    return createProduct;
  }

  async findById(id: string) {
    const productId = await productModel.findById(id);
    return productId;
  }

  async findAll() {
    const products = await productModel.find().populate("product_category");
    return products;
  }

  async delete(id: string) {
    const order = await productModel.findByIdAndDelete(id);
    return order;
  }
}
