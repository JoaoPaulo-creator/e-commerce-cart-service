import OrderController from '../../controllers/order/order.controller'
import OrderRepository from '../../repository/order.repository'
import OrderService from '../../services/order/order.service'

export function makeOrderController() {
  const orderRepo = new OrderRepository()
  const orderService = new OrderService(orderRepo)
  return new OrderController(orderService)
}
