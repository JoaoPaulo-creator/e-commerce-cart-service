import { productModel } from "../models/product.model";
class ProductRepository {
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
    const products = await productModel.find();
    return products;
  }
}

export default new ProductRepository();
