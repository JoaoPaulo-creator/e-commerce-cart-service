import { Request, Response } from "express";
import CategoryService, {
  ICategoryService,
} from "../../services/category/category.service";

export default class CategoryController {
  private categoryService: ICategoryService;

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
  }
  async save(req: Request, res: Response) {
    const { name } = req.body;

    return await this.categoryService
      .createCategory(name)
      .then((response: Response) => {
        return res.status(201).json(response);
      })
      .catch(() => res.status(400).json({ error: "Category already exists" }))
      .catch((error: Error) => {
        return res.json({ error: error.message });
      });
  }

  async show(req: Request, res: Response) {
    return await this.categoryService
      .findAll()
      .then((response: Response) => res.json(response))
      .catch((error: Error) => {
        return res.json(error);
      });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    return this.categoryService
      .deleteCategory(id)
      .then(() => res.sendStatus(204))
      .catch((error: Error) => {
        const { message } = error;
        return res.status(404).json({ error: message });
      });
  }
}
