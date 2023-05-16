// TODO: fix return type

import { Types } from 'mongoose'

export interface ProductsProps {
  unitPrice: number
  title: string
  categoryId: Types.ObjectId
  createdAt: Date
  description?: string | undefined
}

export interface IProducts {
  save(
    description: string,
    unitPrice: number,
    title: string,
    categoryId: string,
  ): Promise<ProductsProps>
  findById(id: string): Promise<ProductsProps>
  findAll(): Promise<ProductsProps[]>
  delete(id: string): Promise<void>
}
