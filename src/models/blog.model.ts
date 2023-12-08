import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.model";

@Entity('blogs')
export class Blog {
    @PrimaryGeneratedColumn('increment', { name: 'blogid' })
    readonly blogid?: number;
    @Column('varchar', { length: 255, name: 'post', nullable: false })
    readonly post: string;
    @Column('integer', { name: 'user_id', nullable: false })
    readonly user_id: number;
    @Column('varchar', { length: 255, name: 'status', nullable: false })
    readonly status: string;
    @ManyToOne(() => Users, user => user.blogs, { eager: true, cascade: true })
    @JoinColumn({ name: 'user_id' })
    readonly user: Users;

} 