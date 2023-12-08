import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.model";


@Entity('requests')
export class Request {
  @PrimaryGeneratedColumn({ name: 'request_id' })
  readonly request_id?: number;

  @Column({ name: 'user_id', nullable: false })
  readonly user_id: number;

  @Column({ name: 'listing_id', nullable: false })
  readonly listing_id: number;

  @Column({ name: 'requested_item_name', nullable: false })
  readonly requested_item_name: string;

  @Column({ name: 'RequestedItemDescription', nullable: true })
  readonly RequestedItemDescription: string;

  @Column({ name: 'RequestedItemPhoto', nullable: true })
  readonly RequestedItemPhoto: string;

  @Column({
    name: 'RequestStatus',
    type: 'varchar',
    length: 20,
    default: 'Pending',
    enum: ['Pending', 'Accepted', 'Rejected'],
  })
  readonly RequestStatus: string;

  @Column({ name: 'RequestDate', default: () => 'CURRENT_TIMESTAMP' })
  readonly RequestDate: Date;

  @ManyToOne(() => Users, { eager: true, cascade: true })
  @JoinColumn({ name: 'user_id' })
  readonly user: Users;
}