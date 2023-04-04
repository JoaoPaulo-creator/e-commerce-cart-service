// TODO: fix return type

export interface IProducts {
  save(
    description: string,
    unitPrice: number,
    title: string,
    categoryId: string
  ): any;
  findById(id: string): any;
  findAll(): any;
  delete(id: string): any;
}
