import { ShiftsGateway } from './shifts.gateway';
import { UserEntity } from './../users/users.entity';
import { ShiftsEntity } from './shifts.entity';
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ShiftsService {

    constructor(
        @InjectRepository(ShiftsEntity)
        public repo: Repository<ShiftsEntity>,
        @InjectRepository(UserEntity)
        private userRepo: Repository<UserEntity>,
        private shiftsGateway: ShiftsGateway

    ) {
    }

    async getShift(id) {
        const data = await this.repo.findOne({ id });
        return data;
    }

    async getAllShift() {
        const data = await this.repo.find();
        return data;
    }

    async getLastShiftByUserID(user_id) {
        const data = await this.repo.findOne({ user_id }, {
            order: { id: 'DESC' }
        });
        return data;
    }

    async enter(user_id) {

        const user = await this.userRepo.findOne({ user_id });

        if (!user) {
            return {
                err: "User doesn't exist"
            }
        }
        const lastShift = await this.getLastShiftByUserID(user_id);


        if (!lastShift || lastShift?.exit) {
            const data = {
                user_id,
                enter: new Date().toISOString(),
                exit: ""
            }


            await this.repo.save(data)
            this.shiftsGateway.completeUpdate();
            return data;
        } else {
            return {
                err: "invalid id"
            }
        }





    }

    async exit(user_id) {

        const lastShift = await this.getLastShiftByUserID(user_id);


        if (lastShift && !lastShift?.exit) {
         
            lastShift.exit = new Date();


            await this.repo.save(lastShift)
            this.shiftsGateway.completeUpdate();

            return lastShift;
        } else {
            return {
                err: "invalid id"
            }
        }





    }


}
