import { prisma } from "../lib/prisma-service";

class ProductRepository {
  async store(
    price: number,
    quantity: number,
    title: string,
    description: string,
    categoryId: string
  ) {
    const createProduct = await prisma.product.create({
      data: {
        price,
        quantity,
        title,
        description,
        categoryId: categoryId,
      },
      select: {
        id: true,
        price: true,
        quantity: true,
        title: true,
        description: true,
        category: true,
      },
    });

    return createProduct;
  }

  async findById(id: string) {
    const productId = await prisma.product.findUnique({ where: { id } });
    return productId;
  }

  async findAll() {
    const products = await prisma.product.findMany();
    return products;
  }
}

export default new ProductRepository();
