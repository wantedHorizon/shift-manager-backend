import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeLogsModule } from './time-logs/time-logs.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';

@Module({
  imports: [
    TimeLogsModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST||'localhost',
      // port: 3306,
      username: process.env.DATABASE_USER||"root",
      password: process.env.DATABASE_PASSWORD||'',
      database: process.env.DATABASE_DB_NAME ||"test2",
      autoLoadEntities: true,
      synchronize: true,
    }),

    UsersModule,

    ShiftsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
