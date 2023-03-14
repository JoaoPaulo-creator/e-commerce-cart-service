import { prisma } from "../lib/prisma-service";

class ProductRepository {
  async store(
    price: number,
    title: string,
    description: string,
    categoryId: string
  ) {
    const createProduct = await prisma.product.create({
      data: {
        price,
        title,
        description,
        categoryId: categoryId,
      },
      select: {
        id: true,
        price: true,
        title: true,
        description: true,
        category: true,
      },
    });

    return createProduct;
  }
}

export default new ProductRepository();
