import { Component, Inject, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PotInterface } from './contracts/pot.interface';
import { UserInterface } from '../user/contracts/user.interface';
import { BaseServiceInterface } from '../base/contracts/base-service.interface';
import { PotDto } from './contracts/pot.dto';
import { BaseService } from '../base/base.service';
import { Container } from '../container/container.entity';
import { isString } from 'util';
import { PotServiceInterface } from './contracts/pot-service.interface';
import { BaseEntityInterface } from '../base/contracts/base-entity.interface';

@Component()
  export class PotService extends BaseService implements PotServiceInterface{
  constructor(
    @Inject('PotRepositoryToken')
    public readonly repository: Repository<PotInterface>,
  ) {
    super();
  }

  async findUser(id: string): Promise<BaseEntityInterface> {
    return await this.findContainer(id)
      .then(container => this.repository.manager.findOne('container', container.id, {relations: ['user']}))
      .then(container => container['user']);
  }

  async findContainer(id: string): Promise<BaseEntityInterface> {
    return await this.findRelationshipEntity(id, 'container')
  }

}
