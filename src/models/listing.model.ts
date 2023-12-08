import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.model";
import { Feedback } from "./feedback.model";

@Entity('listings')
export class Listing {
    @PrimaryGeneratedColumn('increment', { name: 'listingid' })
    readonly listingid?: number;
    @Column('integer', { name: 'user_id', nullable: false })
    readonly user_id: number;
    @Column('varchar', { length: 255, name: 'product_name', nullable: false })
    readonly product_name: string;
    @Column({ length: 255, name: 'description', nullable: true })
    readonly description: string;
    @Column({ length: 255, name: 'photos', nullable: true })
    readonly photos: string;
    @Column({ name: 'created_at',default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;
    @Column({ name: 'verification_status', default: 'Unverified' })
    verification_status: string;
    @ManyToOne(() => Users, user => user.listings, { eager: true, cascade: true })
    @JoinColumn({ name: 'user_id' })
    readonly user: Users;
    @OneToMany(() => Feedback, feedback => feedback.listing)
    readonly feedback?: Feedback[];

} 