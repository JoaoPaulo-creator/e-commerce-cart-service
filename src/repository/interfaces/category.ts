export interface ICategory {
  create(name: string): Promise<CategoryProps>;
  findAll(): Promise<CategoryProps[]>;
  delete(id: string): Promise<void>;
}

export interface CategoryProps {
  name?: string;
}
