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
    return await prisma.category.findMany();
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
