import { 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

export abstract class BaseEntity {
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