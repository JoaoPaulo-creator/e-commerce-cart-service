import { UserProps } from '../../repository/interfaces/user'

export interface IUserService {
  store(name: string, email: string): Promise<UserProps>
  deleteUserById(id: string): Promise<void>
  getUserById(id: string): Promise<UserProps>
  getAllUsers(): Promise<UserProps[]>
}