import { inject, injectable } from "tsyringe";
import { CategoryRepository } from "../../repository/category.repository";

@injectable()
export default class CategoryService {
  constructor(
    @inject(CategoryRepository) private categoryRepository: CategoryRepository
  ) {}

  async createCategory(name: string) {
    const createCategory = await this.categoryRepository.create(name);
    return createCategory;
  }

  async findCategoryById(categoryId: string) {
    const category = await this.categoryRepository.findById(categoryId);
    return category;
  }

  async findAll() {
    const categories = await this.categoryRepository.findAll();
    return categories;
  }

  async deleteCategory(categoryId: string) {
    const category = await this.categoryRepository.delete(categoryId);
    return category;
  }
}
