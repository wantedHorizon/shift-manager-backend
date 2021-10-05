import { ShiftsService } from './shifts.service';
import { ShiftsEntity } from './shifts.entity';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { CrudController } from '@nestjsx/crud';

@Controller('shifts')
export class ShiftsController  {

    constructor(public service: ShiftsService) {
        // super(service)
    }

    @Get("/:id")
    async getShift(@Param('id') id: number) {

        console.log("id",id);
        return this.service.getShift(id);
        
    }

    @Get("/")
    async getAllShift() {

        return this.service.getAllShift();
        
    }


    @Post("/enter/:user_id")
    async enter(@Param('user_id') userId: number) {

        console.log("userId",userId);
        // return this.service.getShift(userId);
        return await this.service.enter(userId)
        
    }

    @Post("/exit/:user_id")
    async exit(@Param('user_id') userId: number) {

        console.log("userId",userId);
        // return this.service.getShift(userId);
        return await this.service.exit(userId)
        
    }

}
