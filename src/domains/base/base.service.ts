import { error } from 'util';
import { HttpStatus } from '@nestjs/common';
import { BaseServiceInterface } from './contracts/base-service.interface';
import { BaseEntityInterface } from './contracts/base-entity.interface';
import { ResponseException } from '../../commons/exception/response.exception';
import { QueryOptions } from './contracts/query.options';
import { Repository } from 'typeorm/repository/Repository';
import { QueryBuilder } from 'typeorm/query-builder/QueryBuilder';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';

export abstract class BaseService implements BaseServiceInterface {

    public repository: Repository<BaseEntityInterface>;

    async find(options?: QueryOptions): Promise<BaseEntityInterface[]> {
        const {relations, filter, pagination} = options;

        if (!filter) {
            return await this.repository.find({relations: relations, skip: pagination.offset, take: pagination.limit})
            .catch(error => error);
        }
        return await this.query(options)
            .catch(error => error);
    }

    async findOne(id: string, options?: QueryOptions): Promise<any> {
        const {relations} = options;

        return await this.repository.findOne(id, {relations: relations})
        .catch(error => error);
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
          .then(entity => entity[relations]);
    }
    

    
    async query(options: QueryOptions): Promise<any> {

        var builder: SelectQueryBuilder<BaseEntityInterface>;
        var tableAlias = this.repository.target['name'];
        const {relations, filter, where, pagination} = options;
        console.log("******", options);
        tableAlias =  tableAlias ? tableAlias.toLowerCase() : "a";
        builder = await this.repository.createQueryBuilder(tableAlias);
        
        // apply relationship if exist in query parameter
        if (relations) {
            relations.map(rel => {
                builder.leftJoinAndSelect(tableAlias+"."+rel, rel)
            });
        }
        
        // TODO apply relation filter if exist in query parameter
        // In left join "If" operator is negation (<>, not in) it should apply in "ON" relation condition
        // If operator is not negation then it should apply to where clause
        filter.map((condition, index) => {
            if (condition) {
                index === 0 ?
                    builder.where(condition):
                    builder.andWhere(condition);
            };
        });

        // apply where clause if exist in query parameter
        where.map((condition, index) => {
            if (condition) {
                index === 0 ?
                    builder.where(condition):
                    builder.andWhere(condition);
            };
        });
        
        // apply pagination
        builder.skip(pagination.offset);
        builder.take(pagination.limit);
        
        // return builder.getSql();
        return builder.getMany();
    }
}