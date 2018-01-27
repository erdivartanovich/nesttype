import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { ContainerServiceInterface } from './contracts/container.service.interface';
import { BaseEntityInterface } from '../base/contracts/base-entity.interface';

@Component()
export class ContainerService extends BaseService implements ContainerServiceInterface {
  constructor(
    @Inject('ContainerRepositoryToken')
    public readonly repository: Repository<BaseEntityInterface>,
  ) {
    super()
  }

}
