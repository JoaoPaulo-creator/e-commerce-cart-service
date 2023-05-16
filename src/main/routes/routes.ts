import { Router } from 'express'

import { makeCategoryController } from '../factories/category-controller.factory'
import { makeOrderController } from '../factories/order-controller.factory'
import { makeProductController } from '../factories/product-controller.factory'
import { makeUserController } from '../factories/user-controller.factory'

export default (routes: Router): void => {
  routes.get(
    '/categories',
    makeCategoryController().show.bind(makeCategoryController()),
  )
  routes.post(
    '/categories',
    makeCategoryController().save.bind(makeCategoryController()),
  )
  routes.delete(
    '/category/:id',
    makeCategoryController().delete.bind(makeCategoryController()),
  )

  // products
  routes.get(
    '/products',
    makeProductController().getProducts.bind(makeProductController()),
  )
  routes.post(
    '/products',
    makeProductController().save.bind(makeProductController()),
  )
  routes.get(
    '/product/:id',
    makeProductController().getProductById.bind(makeProductController()),
  )

  // orders
  routes.get(
    '/orders',
    makeOrderController().getOrders.bind(makeOrderController()),
  )
  routes.post(
    '/orders',
    makeOrderController().createOrder.bind(makeOrderController()),
  )
  routes.patch(
    '/order/:id',
    makeOrderController().updateOrderStatus.bind(makeOrderController()),
  )

  routes.patch(
    '/order/:id/quantity',
    makeOrderController().updateOrderQuantity.bind(makeOrderController()),
  )
  routes.delete(
    '/order/:id',
    makeOrderController().delete.bind(makeOrderController()),
  )
  routes.get(
    '/order/:id',
    makeOrderController().getOrderById.bind(makeOrderController()),
  )

  // users
  routes.post('/users', makeUserController().save.bind(makeUserController()))
  routes.get('/users', makeUserController().findAll.bind(makeUserController()))
  routes.get(
    '/user/:id',
    makeUserController().findById.bind(makeUserController()),
  )
  routes.delete(
    '/user/:id',
    makeUserController().delete.bind(makeUserController()),
  )
}
