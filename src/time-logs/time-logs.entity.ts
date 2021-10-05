import { UserEntity } from './../users/users.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,

} from 'typeorm';

@Entity('logs')
@Unique(['user_id'])
export class TimeLogsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => UserEntity)
  @JoinColumn()
  @Column()
  user_id: string;

  @Column({ precision: 3 })
  enter?: Date;

  @Column({ precision: 3 })
  exit?: Date;

  @Column('timestamp', { precision: 3, default: () => 'CURRENT_TIMESTAMP(3)' })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
