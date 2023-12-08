import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.model";

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn({ name: 'message_id' })
  readonly message_id?: number;

  @Column({ name: 'sender_id', nullable: false })
  readonly sender_id: number;

  @Column({ name: 'receiver_id', nullable: false })
  readonly receiver_id: number;

  @Column({ name: 'listing_ref_id', nullable: false })
  readonly listing_ref_id: number;

  @Column({ name: 'text_msg', nullable: true })
  readonly text_msg: string;

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  readonly created_at: Date;

  @Column({ name: 'status', default: false })
  readonly status: boolean;

  @ManyToOne(() => Users, { eager: true, cascade: true })
  @JoinColumn({ name: 'sender_id' })
  readonly sender: Users;

  @ManyToOne(() => Users, { eager: true, cascade: true })
  @JoinColumn({ name: 'receiver_id' })
  readonly receiver: Users;
}
