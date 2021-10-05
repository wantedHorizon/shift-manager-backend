import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,

} from 'typeorm';

@Entity('users')
@Unique(['user_id'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  firstname: string;

  @Column({ precision: 3 })
  lastname: string;

  @Column('timestamp', { precision: 3, default: () => 'CURRENT_TIMESTAMP(3)' })
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
