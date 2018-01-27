import { Component, Inject, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Pot } from './pot.entity';
import { PotDto } from './contracts/pot.dto';
import { Container } from '../container/container.entity';
import { User } from '../user/user.entity';
import { isString } from 'util';

@Component()
  export class PotService extends BaseService {
  constructor(
    @Inject('PotRepositoryToken')
    public readonly repository: Repository<Pot>,
    @Inject('ContainerRepositoryToken')
    private readonly containerRepository: Repository<Container>,
  ) {
    super();
  }

  async findContainerIdByPotID(potID: string): Promise<string> {
    return await this.repository.findOne(potID, { relations: ["container"] })
      .then(pot => {
        return pot.container.id;
      })
  }

  async findUserByContainerId(containerID: string): Promise<Object> {
    return await this.containerRepository.findOne(containerID, { relations: ["user"] })
      .then(user => {
        return user;
      })
  }

  async findUserByPotID(potID: string, returning: string | User = 'id'): Promise<string | User> {
    return await this.findContainerIdByPotID(potID)
      .then(container_id => this.findUserByContainerId(container_id))
      .then(user => {
         return isString(returning) ? user[returning] : user;
      })
  }

}
