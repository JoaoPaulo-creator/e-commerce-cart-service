import { injectable } from "tsyringe";
import { productModel } from "../models/product.model";

@injectable()
export default class ProductRepository {
  async store(
    unitPrice: number,
    title: string,
    description: string,
    categoryId: string
  ) {
    const createProduct = await productModel.create({
      unitPrice,
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
    // To add category name/description on response,
    // is necessary to use populate() method, and reference to field
    // that has a reference to another document
    const products = await productModel.find().populate("categoryId");
    return products;
  }

  async delete(id: string) {
    const order = await productModel.findByIdAndDelete(id);
    return order;
  }
}
