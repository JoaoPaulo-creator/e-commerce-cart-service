export interface ICategory {
  create(name: string): any;
  findAll(): any;
  delete(id: string): any;
}
