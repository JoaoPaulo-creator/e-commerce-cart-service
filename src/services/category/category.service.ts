import { inject, injectable } from "tsyringe";
import { CategoryRepository } from "../../repository/category.repository";

@injectable()
export default class CategoryService {
  constructor(
    @inject(CategoryRepository) private categoryRepository: CategoryRepository
  ) {}

  async createOrder() {}
}
