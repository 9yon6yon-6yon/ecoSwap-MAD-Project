import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.model";
import { Listing } from "./listing.model";

@Entity('feedbacks')
export class Feedback {
    @PrimaryGeneratedColumn('increment', { name: 'feedback_id' })
    readonly feedback_id?: number;

    @Column('integer', { name: 'user_id', nullable: false })
    readonly user_id: number;

    @Column('integer', { name: 'listing_ref_id', nullable: false })
    readonly listing_ref_id: number;

    @Column('text', { name: 'feedback', nullable: true })
    readonly feedback: string;

    @Column('timestamp', { name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    readonly created_at: Date;

    @ManyToOne(() => Users, user => user.feedback, { eager: true, cascade: true })
    @JoinColumn({ name: 'user_id' })
    readonly user: Users;
    @ManyToOne(() => Listing, listing => listing.feedback, { eager: true, cascade: true })
    @JoinColumn({ name: 'listing_ref_id' })
    readonly listing: Listing;

} 