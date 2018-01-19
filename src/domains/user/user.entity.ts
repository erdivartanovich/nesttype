import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    OneToMany, 
} from "typeorm";

import {Container} from "../container/container.entity";

@Entity()
export class User {

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

    @Column({ type: "varchar" })
    firstName: string;

    @Column({
        type: "varchar",
        nullable: true
    })
    lastName: string;

    @Column({ 
        type: "varchar",
        unique: true
    })
    primaryEmail: string;

    @Column({ 
        type: "varchar",
        unique: true
    })
    primaryPhone: string;

    @Column({ type: "varchar" })
    userName: string;

    @Column({
        type: "varchar",
        nullable: true
    })
    status: string;

    @Column({
        type: "datetime",
        nullable: true
    })
    birthDate: number

    @Column({
        type: "varchar",
        nullable: true
    })
    gender: string
    
    @Column({
        type: "varchar",
        nullable: true
    })
    profilePhoto: string

    @Column({
        type: "int",
        default: "0"
    })
    authType: number

    @OneToMany(type => Container, container => container.user)
    containers: Container[];
}