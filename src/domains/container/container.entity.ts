import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    ManyToOne, 
    OneToMany, 
} from "typeorm";

import {User} from "../user/user.entity";
import {Pot} from "../pot/pot.entity";

@Entity()
export class Container {

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

    @OneToMany(type => Pot, pot => pot.container, {
        cascade: true
    })
    pots: Pot[];

    @ManyToOne(type => User, user => user.containers)
    user: User;
}