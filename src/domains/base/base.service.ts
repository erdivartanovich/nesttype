import { HttpStatus } from '@nestjs/common';
import { BaseServiceInterface } from './contracts/base-service.interface';
import { BaseRepositoryInterface } from './contracts/base-repository.interface';
import { BaseEntityInterface } from './contracts/base-entity.interface';
import { ResponseException } from '../../commons/exception/response.exception';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { error } from 'util';
import { QueryOptions } from './contracts/query.options';
import { Repository } from 'typeorm/repository/Repository';
import { BaseEntity } from './base.entity';

export class BaseService implements BaseServiceInterface {

    public repository: Repository<BaseEntityInterface>;

    async find(options?: QueryOptions): Promise<BaseEntityInterface[]> {
        const {relations, filter} = options;

        return await this.repository.find({relations: relations})
        .catch(error => error);
    }

    async findOne(id: string, options?: QueryOptions): Promise<any> {
        const {relations, filter} = options;

        if (!filter) {
            return await this.repository.findOne(id, {relations: relations})
            .catch(error => error);
        }
    }
    
    async create(dto: Object): Promise<BaseEntityInterface> {
        const entity = this.repository.create();
        for (const key in dto) {
            entity[key] = dto[key];
        }
        return await this.repository.save(entity)
        .catch(error => error);
    }

    async update(id: string, dto: Object): Promise<BaseEntityInterface> {
        return await this.repository.findOneOrFail(id)
        .then(entity => {
            for (const key in dto) {
                if (entity.hasOwnProperty(key)) {
                    entity[key] = dto[key];
                }
            }
            return this.repository.save(entity);
        })
        .catch(error => {
            throw new ResponseException(error.message, error.name, HttpStatus.BAD_REQUEST);
        });
    }

    async findRelationshipEntity(id: string, relations): Promise<BaseEntityInterface> {
        return await this.repository.findOne(id, { relations: [relations] })
          .then(entity => entity[relations])
    }
    
}