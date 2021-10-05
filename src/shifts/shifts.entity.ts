import { UserEntity } from '../users/users.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,

} from 'typeorm';

@Entity('shifts')
// @Unique(['user_id'])
export class ShiftsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToMany(type => UserEntity)
  // @JoinColumn()
  @Column()
  user_id: string;

  @Column({ precision: 3 })
  enter: Date;

  @Column({nullable:true})
  exit?: Date;

  @Column('timestamp', { precision: 3, default: () => 'CURRENT_TIMESTAMP(3)' })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
