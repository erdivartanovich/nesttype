import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Pot} from "../pot/pot.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    primaryEmail: string;

    @OneToMany(type => Pot, pot => pot.user)
    pots: Pot[];
}