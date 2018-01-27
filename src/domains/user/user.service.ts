import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserInterface } from './contracts/user.interface';
import { BaseService } from '../base/base.service';
import { BaseServiceInterface } from '../base/contracts/base-service.interface';
import { UserServiceInterface } from './contracts/user-service.interface';

@Component()
export class UserService extends BaseService implements UserServiceInterface{
  constructor(
    @Inject('UserRepositoryToken')
    public readonly repository: Repository<UserInterface>,
  ) {
    super()
  }

}
