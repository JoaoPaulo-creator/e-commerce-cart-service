import { CategoryProps, ICategory } from '../../repository/interfaces/category'
import { ICategoryService } from '../contracts/icategory.service'

export default class CategoryService implements ICategoryService {
  private categoryRepository: ICategory

  constructor(categoryRepository: ICategory) {
    this.categoryRepository = categoryRepository
  }

  findCategoryById(categoryId: string): Promise<CategoryProps> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<CategoryProps[]> {
    const categories = await this.categoryRepository.findAll()
    return categories
  }

  async deleteCategory(categoryId: string): Promise<void> {
    await this.categoryRepository.delete(categoryId)
  }

  async createCategory(name: string): Promise<CategoryProps> {
    const createCategory = await this.categoryRepository.create(name)
    return createCategory
  }
}
