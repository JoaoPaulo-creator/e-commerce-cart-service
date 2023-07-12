export interface IProductService {
  findAll(): Promise<any[]>
  create(
    description: string,
    unitPrice: number,
    title: string,
    categoryId: string,
  ): any
  findById(id: string): any
}