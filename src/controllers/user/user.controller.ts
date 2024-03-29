/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { IUserService } from '../../services/user/user.service'

export default class UserController {
  constructor(private readonly userService: IUserService) {}

  async save(req: Request, res: Response) {
    const { name, email } = req.body

    return await this.userService
      .store(name, email)
      .then((response) => {
        return res.status(201).json(response)
      })
      .catch((error) => {
        const { message } = error
        return res.status(400).json({ error: message })
      })
  }

  async findAll(req: Request, res: Response) {
    return await this.userService
      .getAllUsers()
      .then((response) => {
        return res.json(response)
      })
      .catch((error) => {
        return res.status(400).json({ message: error.message })
      })
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params
    return await this.userService
      .getUserById(id)
      .then((response) => {
        return res.json(response)
      })
      .catch((error) => {
        return res.status(400).json({ message: error.message })
      })
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    return await this.userService
      .deleteUserById(id)
      .then(() => {
        return res.sendStatus(204)
      })
      .catch((error) => {
        return res.status(400).json({ message: error.message })
      })
  }
}
