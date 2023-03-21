import { injectable } from "tsyringe";
import { categoryModel } from "../models/category.model";

@injectable()
export class CategoryRepository {
  async create(name: string) {
    return await categoryModel.create({ name });
  }

  async update() {
    //
  }

  async findAll() {
    const categories = await categoryModel.find();
    return categories;
  }

  async findById(id: string) {
    return await prisma.category.findUnique({ where: { id } });
  }

  async index(id: string) {
    return await prisma.category.findUnique({ where: { id } });
  }

  async delete(id: string) {
    return await prisma.category.delete({ where: { id } });
  }
}
