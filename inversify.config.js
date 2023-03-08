import { Container } from 'inversify'
import CreateCartController from './src/controllers/create-cart-controller'
import CreateCartRepository from './src/repository/cart-repository'
import CreateCartService from './src/services/create-cart.service'


export const container = new Container()

container.bind<CreateCartService>(CreateCartService).toSelf()
container.bind<CreateCartRepository>(CreateCartRepository).toSelf()
container.bind<CreateCartController>(CreateCartController).toSelf()
