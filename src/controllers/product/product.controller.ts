/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { IProductService } from '../../services/product/product.service'

export default class ProductController {
  constructor(private readonly productService: IProductService) {}

  async save(req: Request, res: Response) {
    const { description, unitPrice, title, categoryId } = req.body
    return await this.productService
      .create(description, unitPrice, title, categoryId)
      .then((response: Response) => {
        return res.status(201).json(response)
      })
      .catch((error: Error) => {
        const { message } = error
        return res.status(400).json({ error: message })
      })
  }

  async getProducts(req: Request, res: Response) {
    const products = await this.productService.findAll()
    return res.status(200).json(products)
  }

  async getProductById(req: Request, res: Response) {
    const { id } = req.params
    return await this.productService
      .findById(id)
      .then((response: Response) => {
        return res.status(200).json(response)
      })
      .catch((error: Error) => {
        const { message } = error
        return res.status(404).json({ message })
      })
  }
}
