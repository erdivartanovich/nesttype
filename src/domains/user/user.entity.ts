import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Pot} from "../pot/pot.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Pot, pot => pot.user)
    pots: Pot[];

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    primaryEmail: string;

}