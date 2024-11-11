import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({default:18})
    age: number;
}
