import { Injectable } from '@nestjs/common'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
}

@Injectable()
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon.doe@mail.com',
    },
  ]

  findOne(id: number): IUser {
    return this.users.find((user) => user.id === id)
  }
}
