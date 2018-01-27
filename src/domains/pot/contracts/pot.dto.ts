import { IsString, IsNumber, IsInt, IsNotEmpty, IsDefined } from 'class-validator';
import { BaseDto } from '../../base/contracts/base.dto';
import { PotInterface } from './pot.interface';
export class PotDto extends BaseDto implements PotInterface{

    @IsString()
    @IsNotEmpty()
    readonly description: string;
    
    @IsNumber()
    readonly soil_sensor_value: number;

    @IsNumber()
    readonly plant_length: number;

    @IsInt()
    readonly lamp_status: number;

    @IsString()
    readonly container_id: string;

    readonly relations: Object;
}