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
    created_at: number;

    @UpdateDateColumn({
        type: "timestamp",
        nullable: true
    })
    updated_at: number;

    @Column({ type: "varchar" })
    first_name: string;

    @Column({
        type: "varchar",
        nullable: true
    })
    last_name: string;

    @Column({ 
        type: "varchar",
        unique: true
    })
    primary_email: string;

    @Column({ 
        type: "varchar",
        unique: true
    })
    primary_phone: string;

    @Column({ type: "varchar" })
    user_name: string;

    @Column({
        type: "varchar",
        nullable: true
    })
    status: string;

    @Column({
        type: "datetime",
        nullable: true
    })
    birth_date: number

    @Column({
        type: "varchar",
        nullable: true
    })
    gender: string
    
    @Column({
        type: "varchar",
        nullable: true
    })
    profile_photo: string

    @Column({
        type: "int",
        default: "0"
    })
    auth_type: number

    @OneToMany(type => Container, container => container.user, {
        cascade: true
    })
    containers: Container[];
}