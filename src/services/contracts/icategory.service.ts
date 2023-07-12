import { CategoryProps } from '../../repository/interfaces/category'

export interface ICategoryService {
  createCategory(name: string): Promise<CategoryProps>
  findCategoryById(categoryId: string): Promise<CategoryProps>
  findAll(): Promise<CategoryProps[]>
  deleteCategory(categoryId: string): Promise<void>
}