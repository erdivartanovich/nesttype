import { IsEmpty, IsDate } from 'class-validator';
import { BaseEntityInterface } from './base-entity.interface';

export class BaseDto implements BaseEntityInterface {

    @IsEmpty()
    id: string;

    @IsDate()
    created_at: number;

    @IsDate()
    updated_at: number;
    
}
