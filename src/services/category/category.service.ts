import { ICategory } from "../../repository/interfaces/category";

// TODO: fix return type
export interface ICategoryService {
  createCategory(name: string): any;
  findCategoryById(categoryId: string): any;
  findAll(): any;
  deleteCategory(categoryId: string): any;
}

export default class CategoryService implements ICategoryService {
  private categoryRepository: ICategory;

  constructor(categoryRepository: ICategory) {
    this.categoryRepository = categoryRepository;
  }

  async findAll() {
    const categories = await this.categoryRepository.findAll();
    return categories;
  }

  async deleteCategory(categoryId: string) {
    const category = await this.categoryRepository.delete(categoryId);
    if (!category) throw new Error("Category not found");
    return category;
  }

  async createCategory(name: string) {
    const createCategory = await this.categoryRepository.create(name);
    return createCategory;
  }

  async findCategoryById(categoryId: string) {
    // const category = await this.categoryRepository.findById(categoryId);
    // return category;
  }
}
