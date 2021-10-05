import { UserEntity } from './../users/users.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShiftsController } from './shifts.controller';
import { ShiftsEntity } from './shifts.entity';
import { ShiftsService } from './shifts.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShiftsEntity,UserEntity])],
  controllers: [ShiftsController],
  providers: [ShiftsService],
  exports: [ShiftsService],

})
export class ShiftsModule {}
