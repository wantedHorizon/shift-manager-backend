import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeLogsController } from './time-logs.controller';
import { TimeLogsEntity } from './time-logs.entity';
import { TimeLogsService } from './time-logs.service';

@Module({
  imports: [TypeOrmModule.forFeature([TimeLogsEntity])],
  controllers: [TimeLogsController],
  providers: [TimeLogsService],
})
export class TimeLogsModule {}
