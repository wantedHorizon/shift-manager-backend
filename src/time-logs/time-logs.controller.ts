import { Controller, Get, Param } from '@nestjs/common';
import { TimeLogsService } from './time-logs.service';

@Controller('time-logs')
export class TimeLogsController {

    constructor(public service: TimeLogsService){}

    @Get('login/:id')
    async login(@Param('id') id: string) {

        console.log("id", id);
       return await  this.service.login(id)
    }


}




