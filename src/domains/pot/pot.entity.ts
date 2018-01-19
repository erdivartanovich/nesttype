import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    ManyToOne, 
} from "typeorm";

import {Container} from "../container/container.entity";

@Entity()
export class Pot {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn({
        type: "timestamp",
        nullable: true
    })
    created_at: number;

    @UpdateDateColumn({
        type: "timestamp",
        nullable: true
    })
    updated_at: number;

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