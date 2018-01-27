import { UserInterface } from '../../user/contracts/user.interface'
import { BaseServiceInterface } from '../../base/contracts/base-service.interface';
import { BaseEntityInterface } from '../../base/contracts/base-entity.interface';
export interface PotServiceInterface extends BaseServiceInterface {

    findUser(container_id: string): Promise<BaseEntityInterface>;
    
    findContainer(id: string): Promise<BaseEntityInterface>;
    
}