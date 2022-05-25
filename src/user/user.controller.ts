import { Metadata, ServerUnaryCall } from '@grpc/grpc-js'
import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

import { IUser, UserService } from './user.service'

//TODO: change to DTO and use class validator
interface IUserById {
  id: number
}

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @GrpcMethod('UserService', 'FindOne')
  findOne(
    data: IUserById,
    metadata: Metadata,
    call: ServerUnaryCall<IUserById, IUser>
  ): IUser {
    console.log('XX data XX', data)
    console.log('XX metadata XX', metadata)
    console.log('XX call XX', call)
    return this.userService.findOne(data.id)
  }
}
