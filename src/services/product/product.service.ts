import { IProducts } from '../../repository/interfaces/product'
import { IProductService } from '../contracts/iproduct.service'

export default class ProductService implements IProductService {
  private productRepo: IProducts

  constructor(productRepo: IProducts) {
    this.productRepo = productRepo
  }

  async findById(id: string) {
    const product = await this.productRepo.findById(id)
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  }

  async create(
    description: string,
    unitPrice: number,
    title: string,
    categoryId: string,
  ) {
    const product = await this.productRepo.save(
      description,
      unitPrice,
      title,
      categoryId,
    )

    return product
  }

  async findAll(): Promise<any[]> {
    const products = await this.productRepo.findAll()
    return products
  }
}
