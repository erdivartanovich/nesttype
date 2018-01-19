import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    ManyToOne, 
    OneToMany, 
} from "typeorm";

import {Pot} from "../pot/pot.entity";
import {User} from "../user/user.entity";

@Entity()
export class Container {

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

    @OneToMany(type => Pot, pot => pot.container, {
        cascadeUpdate: true
    })
    pots: Pot[];

    @ManyToOne(type => User, user => user.containers, {
        cascadeUpdate: true
    })
    user: User;

}