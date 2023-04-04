import { productModel } from "../models/product.model";
import { IProducts } from "./interfaces/product";

export default class ProductRepository implements IProducts {
  async save(
    description: string,
    unitPrice: number,
    title: string,
    categoryId: string
  ) {
    const product = await productModel.create({
      description,
      unitPrice,
      title,
      categoryId,
    });
    return product;
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
