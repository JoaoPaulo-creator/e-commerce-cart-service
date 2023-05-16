import { productModel } from '../models/product.model'
import { IProducts, ProductsProps } from './interfaces/product'

export default class ProductRepository implements IProducts {
  async save(
    description: string,
    unitPrice: number,
    title: string,
    categoryId: string,
  ): Promise<ProductsProps> {
    const product = await productModel.create({
      description,
      unitPrice,
      title,
      categoryId,
    })
    return product
  }

  async findById(id: string): Promise<ProductsProps> {
    const productId = await productModel.findById(id).lean()
    return productId
  }

  async findAll(): Promise<ProductsProps[]> {
    // To add category name/description on response,
    // is necessary to use populate() method, and reference to field
    // that has a reference to another document
    const products = await productModel.find().populate('categoryId').lean()
    return products
  }

  async delete(id: string): Promise<void> {
    await productModel.findByIdAndDelete(id)
  }
}
