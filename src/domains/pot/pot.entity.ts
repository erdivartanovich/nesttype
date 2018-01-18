import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from '../user/user.entity';

@Entity()
export class Pot {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.pots)
    user: User;
    
    @Column("float")
    soilSensorValue: number;

    @Column("float")
    plantLength: number;

    @Column("int")
    lampStatus: number;

}