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
    pot.soilSensorValue = createPotDto.soil_sensor_value; 
    pot.plantLength = createPotDto.plant_length; 
    pot.lampStatus = createPotDto.lamp_status; 
    return await this.potRepository.save(pot);
  }
}
