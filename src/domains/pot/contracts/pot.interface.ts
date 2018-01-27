import { BaseEntityInterface } from '../../base-entity.interface';

export interface PotInterface extends BaseEntityInterface {
    description: string;
    soil_sensor_value: number;
    plant_length: number;
    lamp_status: number;
}