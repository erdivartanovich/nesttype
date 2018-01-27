import { BaseEntityInterface } from './base-entity.interface';

export interface BaseRepositoryInterface {
    clear;
    count;
    create;
    delete;
    find;
    findAndCount;
    findByIds;
    findOne;
    findOneOrFail;
    save(BaseEntityInterface): Promise<BaseEntityInterface>;
}