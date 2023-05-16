import ProductController from '../../controllers/product/product.controller'
import ProductRepository from '../../repository/product.repository'
import ProductService from '../../services/product/product.service'

export function makeProductController() {
  const productRepo = new ProductRepository()
  const productService = new ProductService(productRepo)
  return new ProductController(productService)
}
