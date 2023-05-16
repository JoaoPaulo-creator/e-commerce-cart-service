import CategoryController from '../../controllers/category/category.controller'
import { CategoryRepository } from '../../repository/category.repository'
import CategoryService from '../../services/category/category.service'

export function makeCategoryController() {
  const categoryRepo = new CategoryRepository()
  const categoryService = new CategoryService(categoryRepo)
  return new CategoryController(categoryService)
}
