import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeLogsEntity } from './time-logs.entity';

@Injectable()
export class TimeLogsService {


    constructor(@InjectRepository(TimeLogsEntity) public repo: Repository<TimeLogsEntity>) {

    }


    async login(id: string) {
        const userData = await this.repo.findOne({ "user_id": id });

        // if (userData) {
        //   const data = { operator: userData, startDate: new Date(Date.now()) };
        //   const newEntry = await this.userHours.save(data);
        // }
        return userData;
    }



}
