import { categoryModel } from "../models/category.model";
import { CategoryProps, ICategory } from "./interfaces/category";

export class CategoryRepository implements ICategory {
  async delete(id: string): Promise<void> {
    await categoryModel.findByIdAndDelete(id);
  }
  async create(name: string): Promise<CategoryProps> {
    const category = await categoryModel.create({ name });
    return category;
  }

  async findAll(): Promise<CategoryProps[]> {
    const categories = await categoryModel.find().lean();
    return categories;
  }
}
