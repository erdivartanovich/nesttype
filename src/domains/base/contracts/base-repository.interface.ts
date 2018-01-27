import { BaseEntityInterface } from './base-entity.interface';

export interface BaseRepositoryInterface {

    clear(): any;

    count(): Promise<number>;

    create(): BaseEntityInterface;

    delete(criteria: string): Promise<any>;

    find(): Promise<any[]>;

    findAndCount(): Promise<any>;

    findByIds(ids: any[]): Promise<any[]>;

    findOne(): Promise<BaseEntityInterface>;

    findOneOrFail(id: string): Promise<any>;

    save(BaseEntityInterface): Promise<BaseEntityInterface>;

}