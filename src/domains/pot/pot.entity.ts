import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    ManyToOne, 
} from "typeorm";

import { PotInterface } from './contracts/pot.interface';
import { BaseEntity } from '../base/base.entity';
import { Container } from '../container/container.entity';

@Entity()
export class Pot extends BaseEntity implements PotInterface {

    @Column({
        default: ""
    })
    description: string;

    @Column({
        type: "float",
        nullable: true
    })
    soil_sensor_value: number;

    @Column({
        type: "float",
        nullable: true,
        default: "0"
    })
    plant_length: number;

    @Column({
        type: "int",
        nullable: true
    })
    lamp_status: number;

    @ManyToOne(type => Container, container => container.pots)
    container: Container;

}