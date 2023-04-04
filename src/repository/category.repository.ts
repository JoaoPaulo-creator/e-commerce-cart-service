import { categoryModel } from "../models/category.model";
import { ICategory } from "./interfaces/category";

export class CategoryRepository implements ICategory {
  async delete(id: string) {
    const category = await categoryModel.findByIdAndDelete(id);
    return category;
  }
  async create(name: string) {
    return await categoryModel.create({ name });
  }

  async findAll() {
    const categories = await categoryModel.find();
    return categories;
  }
}
