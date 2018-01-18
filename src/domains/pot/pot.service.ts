import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pot } from './pot.entity';

@Component()
export class PotService {
  constructor(
    @Inject('PotRepositoryToken')
    private readonly potRepository: Repository<Pot>,
  ) {}

  async findAll(): Promise<Pot[]> {
    return await this.potRepository.find();
  }
}
