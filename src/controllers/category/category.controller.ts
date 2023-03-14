import { Request, Response } from "express";
import { autoInjectable, inject } from "tsyringe";
import CategoryService from "../../services/category/category.service";

@autoInjectable()
export default class CategoryController {
  constructor(
    @inject(CategoryService) private categoryService: CategoryService
  ) {}
  async save(req: Request, res: Response) {
    const { name } = req.body;

    return await this.categoryService
      .createCategory(name)
      .then((response) => {
        return res.status(201).json(response);
      })
      .catch(() => res.status(400).json({ error: "Category already exists" }));
  }
}
