import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Container } from './container.entity';

@Component()
export class ContainerService {
  constructor(
    @Inject('ContainerRepositoryToken')
    private readonly containerRepository: Repository<Container>,
  ) {}

  async findAll(): Promise<Container[]> {
    return await this.containerRepository.find();
  }
}
