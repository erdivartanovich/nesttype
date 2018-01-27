import { BaseEntityInterface } from '../../base/contracts/base-entity.interface';

export interface UserInterface extends BaseEntityInterface {

    first_name: string;

    last_name: string;

    primary_email: string;

    primary_phone: string;

    user_name: string;

    status: string;

    birth_date: number;

    gender: string;

    profile_photo: string;

    auth_type: number;
}