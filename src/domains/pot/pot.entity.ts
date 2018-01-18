import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {User} from "../user/user.entity";

@Entity()
export class Pot {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: number;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @Column("float")
    soilSensorValue: number;

    @Column("float")
    plantLength: number;

    @Column("int")
    lampStatus: number;

    @ManyToOne(type => User, user => user.pots)
    user: User;

}