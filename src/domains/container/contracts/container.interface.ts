import { BaseEntityInterface } from '../../base/contracts/base-entity.interface';

export interface ContainerInterface extends BaseEntityInterface {

    pots?: BaseEntityInterface[];
    
    user?:  BaseEntityInterface;
}