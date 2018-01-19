import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pot } from './pot.entity';
import { CreatePotDto } from './dto/create-pot.dto';
import { create } from 'domain';

@Component()
export class PotService {
  constructor(
    @Inject('PotRepositoryToken')
    private readonly potRepository: Repository<Pot>,
  ) {}

  async findAll(): Promise<Pot[]> {
    return await this.potRepository.find();
  }

  async create(createPotDto: CreatePotDto) {
    const pot = new Pot();
    pot.soilSensorValue = createPotDto.soilSensorValue; 
    pot.plantLength = createPotDto.plantLength; 
    pot.lampStatus = createPotDto.lampStatus; 
    return await this.potRepository.save(pot);
  }
}
