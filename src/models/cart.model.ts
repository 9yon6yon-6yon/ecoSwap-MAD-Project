import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.model";
import { Listing } from "./listing.model";

@Entity('carts')
export class Cart {
    @PrimaryGeneratedColumn('increment', { name: 'cart_id' })
    readonly cart_id?: number;

    @Column('integer', { name: 'user_id', nullable: false })
    readonly user_id: number;

    @Column('integer', { name: 'listing_id', nullable: false })
    readonly listing_id: number;

    @Column('timestamp', { name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    readonly created_at: Date;

    @ManyToOne(() => Users, user => user.feedback, { eager: true, cascade: true })
    @JoinColumn({ name: 'user_id' })
    readonly user: Users;
    @ManyToOne(() => Listing, listing => listing.feedback, { eager: true, cascade: true })
    @JoinColumn({ name: 'listing_id' })
    readonly listing: Listing;

} 