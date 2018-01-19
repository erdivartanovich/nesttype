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
    pot.soil_sensor_value = createPotDto.soil_sensor_value; 
    pot.plant_length = createPotDto.plant_length; 
    pot.lamp_status = createPotDto.lamp_status; 
    return await this.potRepository.save(pot);
  }
}
