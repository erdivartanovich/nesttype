import { BaseRepositoryInterface } from './base-repository.interface';
import { BaseEntityInterface } from './base-entity.interface';

export interface BaseServiceInterface {
    
    repository: BaseRepositoryInterface;

    find(options?: Object): Promise<BaseEntityInterface[]>;

    findOne(id: string, options?: Object): Promise<BaseEntityInterface>;

    create(dto: Object): Promise<BaseEntityInterface>;

    update(id: string, dto: Object): Promise<BaseEntityInterface>;

    findRelationshipEntity(id: string, relations): Promise<BaseEntityInterface>;

}