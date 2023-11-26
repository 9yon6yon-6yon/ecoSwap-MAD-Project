import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;
    @Column('varchar', { length: 50, name: 'email', nullable: false })
    readonly email: string;
    @Column('varchar', { length: 255, name: 'password', nullable: false })
    readonly password: string;
}