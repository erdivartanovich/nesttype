import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {Pot} from "../pot/pot.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: number;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    primaryEmail: string;

    @Column()
    primaryPhone: string;

    @Column()
    userName: string;

    @Column()
    status: string;

    @Column({type: "datetime"})
    birthDate: number

    @Column()
    gender: string
    
    @Column()
    profilePhoto: string

    @OneToMany(type => Pot, pot => pot.user)
    pots: Pot[];
}