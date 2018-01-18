import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "../user/user.entity";

@Entity()
export class Pot {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("float")
    soilSensorValue: number;

    @Column("float")
    plantLength: number;

    @Column("int")
    lampStatus: number;

    @ManyToOne(type => User, user => user.pots)
    user: User;

}