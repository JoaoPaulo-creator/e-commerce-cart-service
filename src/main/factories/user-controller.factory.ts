import UserController from '../../controllers/user/user.controller'
import UserRepository from '../../repository/user.repository'
import UserService from '../../services/user/user.service'

export function makeUserController() {
  const userRepo = new UserRepository()
  const userService = new UserService(userRepo)
  return new UserController(userService)
}
