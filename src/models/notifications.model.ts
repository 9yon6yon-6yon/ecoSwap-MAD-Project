import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.model";

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn({ name: 'notification_id' })
  readonly notification_id?: number;

  @Column({ name: 'user_id', nullable: false })
  readonly user_id: number;

  @Column({ name: 'notification_text', nullable: true })
  readonly notification_text: string;

  @Column({ name: 'is_read', default: false })
  readonly is_read: boolean;

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  readonly created_at: Date;

  @ManyToOne(() => Users, { eager: true, cascade: true })
  @JoinColumn({ name: 'user_id' })
  readonly user: Users;
}