import { IsString, IsNumber, IsInt, IsNotEmpty, IsDefined } from 'class-validator';
export class PotDto {
    @IsString()
    readonly id: string;
    
    @IsNumber()
    readonly soil_sensor_value: number;

    @IsNumber()
    readonly plant_length: number;

    @IsInt()
    readonly lamp_status: number;

    @IsString()
    readonly container_id: string;
}