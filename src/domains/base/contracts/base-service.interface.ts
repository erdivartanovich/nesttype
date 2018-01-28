import { BaseEntityInterface } from './base-entity.interface';
import { Repository } from 'typeorm/repository/Repository';

export interface BaseServiceInterface {
    
    repository: Repository<BaseEntityInterface>;

    find(options?: Object): Promise<BaseEntityInterface[]>;

    findOne(id: string, options?: Object): Promise<BaseEntityInterface>;

    create(dto: Object): Promise<BaseEntityInterface>;

    update(id: string, dto: Object): Promise<BaseEntityInterface>;

    findRelationshipEntity(id: string, relations): Promise<BaseEntityInterface>;

}