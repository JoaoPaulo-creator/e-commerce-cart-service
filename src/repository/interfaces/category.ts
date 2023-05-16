export interface CategoryProps {
  name?: string
}

export interface ICategory {
  create(name: string): Promise<CategoryProps>
  findAll(): Promise<CategoryProps[]>
  delete(id: string): Promise<void>
}
