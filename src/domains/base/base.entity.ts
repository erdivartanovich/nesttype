import { 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

import { BaseEntityInterface } from './contracts/base-entity.interface';
export abstract class BaseEntity implements BaseEntityInterface {
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
}