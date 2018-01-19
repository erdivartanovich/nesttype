import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    ManyToOne, 
} from "typeorm";

import {User} from "../user/user.entity";

@Entity()
export class Pot {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn({
        type: "timestamp",
        nullable: true
    })
    createdAt: number;

    @UpdateDateColumn({
        type: "timestamp",
        nullable: true
    })
    updatedAt: number;

    @Column({
        type: "float",
        nullable: true
    })
    soilSensorValue: number;

    @Column({
        type: "float",
        nullable: true,
        default: "0"
    })
    plantLength: number;

    @Column({
        type: "int",
        nullable: true
    })
    lampStatus: number;

    @ManyToOne(type => User, user => user.pots)
    user: User;

}