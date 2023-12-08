import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.model";


@Entity('subscriptions')
export class Subscription {
  @PrimaryGeneratedColumn({ name: 'subscription_id' })
  readonly subscription_id?: number;

  @Column({ name: 'user_id', nullable: false })
  readonly user_id: number;

  @Column({ name: 'type', type: 'varchar', length: 20, enum: ['Premium', 'Free'], nullable: false })
  readonly type: string;

  @Column({ name: 'start_date', default: () => 'CURRENT_TIMESTAMP' })
  readonly start_date: Date;

  @Column({ name: 'end_date', nullable: true })
  readonly end_date: Date;

  @OneToOne(() => Users, { eager: true, cascade: true })
  @JoinColumn({ name: 'user_id' })
  readonly user: Users;
}