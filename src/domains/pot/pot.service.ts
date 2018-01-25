import { Component, Inject, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pot } from './pot.entity';
import { PotDto } from './dto/pot.dto';
import { Container } from '../container/container.entity';
import { User } from '../user/user.entity';
import { ResponseException } from '../../commons/exception/response.exception';
import { isString } from 'util';

@Component()
export class PotService {
  constructor(
    @Inject('PotRepositoryToken')
    private readonly potRepository: Repository<Pot>,
    @Inject('ContainerRepositoryToken')
    private readonly containerRepository: Repository<Container>,
  ) {}

  async findAll(): Promise<Pot[]> {
    return await this.potRepository.find();
  }

  async find(id: string): Promise<Pot> {
    return await this.potRepository.findOne(id);
  }

  async create(potDto: PotDto) {
    const pot = new Pot();
    if (potDto.soil_sensor_value) pot.soil_sensor_value = potDto.soil_sensor_value; 
    if (potDto.plant_length) pot.plant_length = potDto.plant_length; 
    if (potDto.lamp_status) pot.lamp_status = potDto.lamp_status; 
    return await this.potRepository.save(pot);
  }

  async update(id: string, potDto: PotDto) {
    return await this.potRepository.findOneOrFail(id)
      .then(pot => {
        if (potDto.soil_sensor_value) pot.soil_sensor_value = potDto.soil_sensor_value; 
        if (potDto.plant_length) pot.plant_length = potDto.plant_length; 
        if (potDto.lamp_status) pot.lamp_status = potDto.lamp_status; 
        return this.potRepository.save(pot);
      })
      .catch(error => {
        return error;
      });
  }

  async findContainerIdByPotID(potID: string): Promise<string> {
    return await this.potRepository.findOne(potID, { relations: ["container"] })
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
