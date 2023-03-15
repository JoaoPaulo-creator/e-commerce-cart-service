import { injectable } from "tsyringe";
import { prisma } from "../lib/prisma-service";

@injectable()
export class CategoryRepository {
  async create(name: string) {
    return await prisma.category.create({ data: { name } });
  }

  async update() {
    //
  }

  async findAll() {
    const categories = await prisma.category.findMany();
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
